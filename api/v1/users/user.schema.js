const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type User{
        _id:ID!
        userName:String!
        fullName:String!
        age:String!
        email:String!
        password:String!
    }
    input userInput{
        userName:String!
        fullName:String!
        age:String!
        email:String!
        password:String!
    }
    type AuthData{
        userId:ID!
        token:String!
        tokenExpiration:Int!
    }
    type TokenResponse{
        isAuthenticated: Boolean!
    }
    type RootQuery{
        user:[User!]!
        login(email:String!,password:String!):AuthData!
        IsAuthenticated(token:String!):TokenResponse!
    }

    type RootMutation{
        register(userInput:userInput):User
    }
    schema{
        query:RootQuery
        mutation:RootMutation
    }
    `
);