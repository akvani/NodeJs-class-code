// Database Connection

const mongoose = require('mongoose')

const {dbConfig} = require('../config').appconfig


// Creating Mongoo Connection
function createMongoConnection(){
    mongoose.connect(dbConfig.mongourl);
}


// get mongoo connection string

function getMongoConnection(){
    return mongoose.connection;
}


module.exports={
    getMongoConnection,
    createMongoConnection
}