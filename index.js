const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose')
const resolvers = require('./resolvers')
const schemaPath = './schema/index.graphql'

mongoose.connect("mongodb+srv://joao:joao@cluster0.jlbcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Conectando ao mongo")
})

const server = new ApolloServer({typeDefs: importSchema(schemaPath),resolvers})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})
