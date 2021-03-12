const mongoose = require('mongoose')
require('../../models/Post')
const Post = mongoose.model('Post')

module.exports = {
     posts:() =>  Post.find()
     
     ,
     
}