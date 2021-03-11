const mongoose = require('mongoose')
require('../../models/Usuario')
const Usuario = mongoose.model('Usuario')
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
    },



    excluirUsuario: async (_, { filtro }) => {
        
    },

    alterarUsuario: (_, { filtro, dados }) => Usuario.findOneAndUpdate(filtro, dados, { new: true })
    

}