const mongoose = require('mongoose')
// 链接mongo,并且使用react集合
const DB_URL = 'mongodb://localhost:27017/register'
mongoose.connect(DB_URL);

const models = {
    user: {
        'user': { type: String, require: true },
        'pwd': { type: String, require: true },
        'type': { type: String, require: true },
        //头像
        'avatar': { type: String },
        // 个人简介或者职位简介
        'desc': { type: String },
        // 职位名
        'title': { type: String },
        // 如果你是boss还有两个字段
        'company': { type: String },
        'money': { type: String },
    },
    chat: {

    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
// mongoose.model('user').remove({ user: 'zw' }, function (err, doc) {
//     console.log(doc)//{ n: 0, ok: 1 }
// })
module.exports = {
    getModel: function (name) {
        return mongoose.model(name);
    }
}