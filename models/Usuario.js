const mongoose = require('mongoose')

const usuario = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    }
},{
    timestamps : true
})

module.export = mongoose.model("Usuario", usuario);