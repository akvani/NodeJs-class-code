const router = require('express').Router();

const userCtrl= require('./users.controller');

router.get('/login',(req, res)=>{
    res.send("welcome")
})

router.post('/register', userCtrl.userRegister);


module.exports= router