const mongoose = require('mongoose')
require('../../models/Post')
const Post = mongoose.model('Post')

module.exports = {

       
    novoPost: async (_, { dados }) => {
        const post = await Post.create(dados)

        return post
    }
        
    ,

    excluirPost: async (_, { filtro }) => {},

    alterarPost: (_, { filtro, dados }) => {}
    

}