const express = require('express');
const mongoose = require('mongoose')
// 链接mongo,并且使用react集合
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success');
})
// 定义数据结构
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: {
        type: Number, require: true
    }
}))

// User.create({
//     user: 'zuowang3',
//     age: 27
// }, function (err, doc) {
//     if (!err) { console.log(doc) } else {
//         console.log('创建表结构',err)
//     }
// })


// User.remove({age:26},function(err,doc){
//     console.log(删除,doc)//{ n: 0, ok: 1 }
// })
// 类似于mysql的表，mongo里有文档，

// User.update({'user':'zuowang'},{'$set':{age:28}},function(err,doc){
//     if(!err){
//         console.log('更新',doc)
//     }
// })

const app = express();
app.get('/', function (req, res) {

    res.send('<h1>Hello world</h1>')
})

// app.post 
// app.use 使用模块

app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {//User这个表 where{user:'zuowang'}
        res.json(doc)
    })
    //find返回的是一个包含对象的数组，findOne返回一个对象如果不添加条件默认返回第一个
    // res.json({ name: 'zuowang', age: '24' })
    // res.sendfile()  //返回文件
})
app.listen(8888, function () {
    console.log('Node app start at port 8888')
})
