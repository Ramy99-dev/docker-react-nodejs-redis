
const mongoose = require('mongoose')

const todoModel = mongoose.model('todo',new mongoose.Schema({todo:String}))

module.exports = todoModel