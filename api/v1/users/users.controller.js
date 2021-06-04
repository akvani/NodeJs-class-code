const userdsao=  require('./users.dao')

let userRegister=(req,res)=>{
    const user= req.body;
    userdsao.registerUser(user)
    .then((result)=>{
        res.send(result.status);
    })
    .catch((error)=>{
        res.send(erorr);
    })
}

module.exports={
    userRegister
}