const mongoose = require('mongoose')

const Schema = mongoose.Schema  // Schema :: structure of table

const UserSchema = new Schema({
    firstname : { type : String , required : true },
    lastname : { type : String },
    email : { type : String , required : true },
    password : { type : String , required : true }
})

module.exports = mongoose.model('User' , UserSchema)