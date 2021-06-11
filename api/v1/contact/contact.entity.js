// User Model

const mongoose= require('mongoose');

// define Schema -> table->document
const Schema= mongoose.Schema;

const contactSchema= new Schema({
    contactId: {type: String, require: true},
    contactName: {type: String, require: true, lowecase: true, unique:true},
    age:{ type: String, require: true},
    mobile: {type:String, require: true}
})

module.exports = mongoose.model('contact', contactSchema);