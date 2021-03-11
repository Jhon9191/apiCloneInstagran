const mongoose = require('mongoose')
require('../../models/Usuario')
const Usuario = mongoose.model('Usuario')
require("../../models/usuariosPerfis")
const usuariosPerfis = mongoose.model('usuariosPerfis')
const { perfil: buscar } = require('../Query/perfil')
require('../../models/Perfil')
const Perfil = mongoose.model("Perfil")
module.exports = {

       
    novoUsuario: async (_, { dados }) => {
        const usuario = await Usuario.create(dados)
        let idPerfis = []
        if(dados.perfis){
            for(filtro of dados.perfis){
                const perfil = await buscar(_,{
                    filtro
                })
                if(perfil){
                    idPerfis.push(perfil._id)
                }
            }
        }
        for (juntar of idPerfis){
            usuariosPerfis.create({
                usuarioId: usuario._id,
                perfilId: juntar
            })
        }
        return usuario
    }
    // console.log(dados.perfis)
    ,



    excluirUsuario: async (_, { filtro }) => {
        const data = await Usuario.findOne(filtro)
        await Usuario.findOneAndDelete(filtro)
        return data
    },

    alterarUsuario: (_, { filtro, dados }) => Usuario.findOneAndUpdate(filtro, dados, { new: true })


}