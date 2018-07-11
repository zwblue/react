const express = require('express');
const mongoose=require('mongoose')
// 链接mongo,并且使用react集合
const DB_URL='mongodb://localhost:27017/react'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect success');
})
// 类似于mysql的表，
const app = express();
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

// app.post 
// app.use 使用模块

app.get('/data', function (req, res) {
    res.json({name:'zuowang',age:'24'})
    // res.sendfile()  //返回文件
})
app.listen(8888, function () {
    console.log('Node app start at port 8888')
})
