const mongoose = require('mongoose')
require('../../models/Post')
const Post = mongoose.model('Post')

module.exports = {

       
    novoPost: async (_, { dados }) => {
        const post = await Post.create(dados)

        return post
    }
        
    ,

    excluirPost: async (_, { filtro }) => {
        const data = await Post.findOne(filtro)
        await Post.findOneAndDelete(filtro)
        return data
    },

    alterarPost: (_, { filtro, dados }) => Post.findOneAndUpdate(filtro, dados, { new: true })
    

}