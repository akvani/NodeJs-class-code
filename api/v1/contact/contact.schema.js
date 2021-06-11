// How to maniuplate data in db (Query)
// 1. Schema
// Query and Mutation
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
      type Contacts{
          contactId:ID!
          name:String!
          age:String!
          mobile:String!
      }
      input userInput{
        name:String!
        age:String!
        mobile:String!
      }
      type RootQuery{
        contact:[Contacts!]!
      }
      type RootMutation{
        createContact(userInput:userInput):Contacts,
      }

      schema{
          query: RootQuery
          mutation: RootMutation
      }`
);