const mongoose = require('mongoose')
const perfil = require('../Query/perfil')
require("../../models/usuariosPerfis")
const usuariosPerfis = mongoose.model('usuariosPerfis')
require('../../models/Perfil')
const Perfil = mongoose.model("Perfil")
const { perfis: buscar, perfis } = require('../Query/perfil')
module.exports = {
    perfis: async (usuario) => {
        if (usuario) {
            let ids = []
            let perfils = []
            const itens = await  usuariosPerfis.find({ usuarioId: usuario.id });
            for (item of itens) {
                ids.push(item.perfilId)
            }
            if (itens) {
                for (id of ids) {
                    const perfil = Perfil.findOne({ _id: id })
                    perfils.push(perfil)
                }
            }
            return perfils

        } else {
            return false
        }
    }
}

