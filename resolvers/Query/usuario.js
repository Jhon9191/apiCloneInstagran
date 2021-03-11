const mongoose = require('mongoose')
require('../../models/Usuario')
const Usuario = mongoose.model('Usuario')

module.exports = {
     usuarios:() =>  Usuario.find()
     
     ,
     usuario:(_, { filtro }) =>  Usuario.findOne(filtro)
       
    ,
}