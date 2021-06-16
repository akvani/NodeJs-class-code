const User = require('./users.entity');
const { uuid } = require('uuidv4')
const bcrypt = require('bcryptjs')


// Token Generation Pacakage
const jwt = require('jsonwebtoken');
const jwtSecretKey = "keyformine";

module.exports = {
    // add a new User
    register: async args => {
        try {
            const euser = await User.findOne({ email: args.userInput.email })
            if (euser) {
                throw new Error('User already Registered');
            }
            else {
                // Encrypt the password
                const hashedpassword = await bcrypt.hash(args.userInput.password, 12)
                const newUser = new User({
                    userId: uuid(),
                    userName: args.userInput.userName,
                    fullName: args.userInput.fullName,
                    age: args.userInput.age,
                    email: args.userInput.email,
                    password: hashedpassword,
                })

                const result = await newUser.save();
                return { ...result._doc, password: null, _id: result.userId };
            }
        }
        catch (err) {
            throw err;
        }

    },
    // Get all the users
    user: () => {
        return User.find();
    }
    ,
    login: async ({ email, password }) => {

        const euser = await User.findOne({ email: email })
        console.log(euser.password);
        if (!euser) {
            throw new Error('User does not Exist')
        }
        const ismatch = await bcrypt.compare(password, euser.password);
        if (!ismatch) {
            throw new Error('Password')
        }

        const token = jwt.sign(
            {
                userId: euser.userId,
                userName: euser.userName
            },
            jwtSecretKey,
            {
                expiresIn: "1h"
            }
        )
        console.log(token);
        return { userId: euser.userId, token: token, tokenExpiration: 1 }

    },
    IsAuthenticated: async ({ token }) => {
        try {
            const response = await jwt.verify(token, jwtSecretKey);
            return { isAuthenticated: true }
        }
        catch (err) {
            return { isAuthenticated: false }
        }

    }
}

// // registr a User
// const registerUser = (user)=>{
//     return new Promise((resolve,reject)=>{
//         // User object-> UserModel

//         // Defien local Objec for USer
//         let newUser= new userModule();
//         newUser.userId=  uuid();
//         newUser.userName= user.userName;
//         newUser.age= user.age;
//         newUser.passwod= user.password;

//         newUser.save((error, addeduser)=>{
//             if(error)
//             reject({message:"Something Went Wrong", status:500})
//             else
//             resolve({message:"User Register Succesfully", status:201, UserInfo: addeduser})
//         })


//      })
// }



// module.exports= {
//     registerUser
// }