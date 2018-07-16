const express = require('express');
const mongoose = require('mongoose')
// 链接mongo,并且使用react集合
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL);



const app = express();
app.get('/', function (req, res) {

    res.send('<h1>Hello world</h1>')
})

app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {//User这个表 where{user:'zuowang'}
        res.json(doc)
    })
})
