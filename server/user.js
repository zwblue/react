const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const _filter = { 'pwd': 0, '_v': 0 }

Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})
Router.post('/register', function (req, res) {
    // User.remove({},function(e,d){})//清除所有数据
    const { user, pwd, type } = req.body;
    User.findOne({ user: user }, function (err, doc) {
        if (doc) {
            console.log(doc)
            return res.json({ code: 1, msg: '用户名重复' })
        }
        // 注册无法获得id的解决方法 
        const userModel = new User({ user, type, pwd: md5Pwd(pwd) })
        userModel.save(function (e, d) {
            if (e) { return res.json({ code: 1, msg: '后端故障' }) }
            const { user, type, _id } = d
            res.cookie('userid', _id)
            return res.json({ code: 0, data: { user, type, _id } })
        })
        // User.create({ user, pwd: md5Pwd(pwd), type }, function (e, d) {
        //     if (e) {
        //         return res.json({ code: 1, msg: '后端出错了' })
        //     }
        //     return res.json({ code: 0, msg: '注册成功' })
        // })
    })
})
Router.post('/login', function (req, res) {
    const { user, pwd } = req.body;
    //{'pwd':0} 第二个入参将返回的pwd字段清除
    User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '用户名或密码错误' })
        }
        res.cookie('userid', doc._id);
        return res.json({ code: 0, data: doc, msg: '登录成功' })
    })
})
Router.get('/info', function (req, res) {
    // 用户有没有cookie
    const { userid } = req.cookies;
    if (!userid) {
        return res.json({ code: 1, msg: '未登录' })
    }
    User.findOne({ _id: userid }, _filter, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了！' })
        }
        if (doc) {
            return res.json({ code: 0, data: doc })
        }
    })
})

function md5Pwd(pwd) {
    const salt = 'react_is_good_2384324x8ydf!#*932Yfdf~~'
    return utils.md5(utils.md5(pwd + salt))
}
module.exports = Router