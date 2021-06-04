const serverConfig= require('./config').appconfig;
const db= require('./db')
const api= require('./api');

const bodyparser= require('body-parser')
// Start my db Server


const connectionToDatabase=()=>{
    db.createMongoConnection();
    dbconnection= db.getMongoConnection();
}

// MiddleWare for app

const SetAppMiddleWare =(app)=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
}

const apiSetUp = (app)=>{
    app.use('/api', api);
}

module.exports={
    connectionToDatabase,
    SetAppMiddleWare,
    apiSetUp
}