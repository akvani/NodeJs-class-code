const router = require('express').Router();

const {graphqlHTTP} = require('express-graphql');
const graphqlSchema = require('./user.schema');
const graphqlResolver= require('./user.rootResolver')
router.use('/hello',(req,res)=>{
    res.send("response from Rest API")
})

router.use('/',graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
})
)


module.exports= router