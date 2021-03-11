const mongoose = require('mongoose')
require('../../models/Usuario')
const Usuario = mongoose.model('Usuario')
module.exports = {

       
    novoUsuario: async (_, { dados }) => {
        
    },



    excluirUsuario: async (_, { filtro }) => {
       
    },

    alterarUsuario: (_, { filtro, dados }) => {

    }

}