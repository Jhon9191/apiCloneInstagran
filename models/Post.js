const mongoose = require('mongoose')

const Post = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    autor:{
        type: String
    }
},{
    timestamps : true
})

module.export = mongoose.model("Post", Post);