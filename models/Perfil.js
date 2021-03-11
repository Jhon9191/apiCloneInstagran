const mongoose = require('mongoose')

const perfil = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    rotulo:{
        type: String,
        required: true
    }
},{
    timestamps : true
})

module.export = mongoose.model("Perfil", perfil);