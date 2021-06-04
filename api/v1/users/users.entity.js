// User Model

const mongoose= require('mongoose');

// define Schema -> table->document
const Schema= mongoose.Schema;

const userSchema= new Schema({
    userId: {type: String, require: true},
    userName: {type: String, require: true, lowecase: true, unique:true},
    age:{ type: String, require: true},
    password: {type:String, require: true}
})

module.exports = mongoose.model('user', userSchema);