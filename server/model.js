const mongoose = require('mongoose')
// 链接mongo,并且使用react集合
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL);