const app =require('../app');

const {serverConfig}= require('../config').appconfig;

const appService= require('../app.service')

app.listen(serverConfig.port,()=>{
    console.log(`Server running in PORt`, serverConfig.port);
})