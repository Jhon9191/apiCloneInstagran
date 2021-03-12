const usuario = require('./usuario')
const post = require('./post')
 module.exports = {
    ...usuario,
    ...post
 }