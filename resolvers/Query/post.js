const mongoose = require('mongoose')
require('../../models/Post')
const Post = mongoose.model('Post')

module.exports = {
     posts:() =>  Post.find()
     
     ,
     post: async(_, { filtro }) =>  {
         const post = await Post.findOne(filtro)
         return post
     }
       
    ,
}