const express=  require('express');
const app= express();
const appService= require('./app.service');


appService.connectionToDatabase();
appService.SetAppMiddleWare(app);
appService.apiSetUp(app);


module.exports= app;
