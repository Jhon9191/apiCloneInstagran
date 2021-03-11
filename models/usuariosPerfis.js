const mongoose = require('mongoose')

const usuariosPerfisSchema = mongoose.Schema({
    usuarioId:{
        type: String,
        required: true
    },
    perfilId:{
        type: String,
        required: true
    }
},{
    timestamps : true
})

module.export = mongoose.model("usuariosPerfis", usuariosPerfisSchema);