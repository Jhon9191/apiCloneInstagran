const mongoose = require('mongoose')
require('../../models/Perfil')
const Perfil = mongoose.model("Perfil")
// const { perfil: obterPerfil } = require('../Query/perfil');
module.exports = {

    novoPerfil:(_, { dados }) => Perfil.create(dados),
    
    excluirPerfil: async(_, { filtro }) => {
       const data = await Perfil.findOne(filtro)
       await Perfil.findOneAndDelete(filtro)
       return data
    },

    alterarPerfil:(_, { filtro, dados }) => Perfil.findOneAndUpdate(filtro, dados, {new: true})
}