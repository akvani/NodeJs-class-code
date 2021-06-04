const userModule = require('./users.entity');
const {uuid}= require('uuidv4')

// registr a User
const registerUser = (user)=>{
    return new Promise((resolve,reject)=>{
        // User object-> UserModel

        // Defien local Objec for USer
        let newUser= new userModule();
        newUser.userId=  uuid();
        newUser.userName= user.userName;
        newUser.age= user.age;
        newUser.passwod= user.password;

        newUser.save((error, addeduser)=>{
            if(error)
            reject({message:"Something Went Wrong", status:500})
            else
            resolve({message:"User Register Succesfully", status:201, UserInfo: addeduser})
        })

      
     })
}



module.exports= {
    registerUser
}