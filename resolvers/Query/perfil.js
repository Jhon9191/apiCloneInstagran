const mongoose = require('mongoose')
require('../../models/Perfil')
const Perfil = mongoose.model('Perfil')

module.exports = {
    perfis:() => {
        return Perfil.find()
    },

    perfil: (_, { filtro }) => {
        if(!filtro) return null
        if(filtro){
            return Perfil.findOne(filtro)
        }else{
            return false
        }

    }
    

}