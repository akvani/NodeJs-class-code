const router = require('express').Router();

const {graphqlHTTP}= require('express-graphql');

const grapqlSchma= require('./contact.schema')

const grapqlResolver= require('./contact.rootResolver')

router.use('/hello',(req,res)=>{
    res.send("response from Rest API")
})

router.use('/',
graphqlHTTP({
    schema:  grapqlSchma,
    rootValue: grapqlResolver,
    graphiql: true
}))

module.exports= router;