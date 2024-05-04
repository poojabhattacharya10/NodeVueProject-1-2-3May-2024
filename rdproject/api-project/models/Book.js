const mongoose = require('mongoose')

const Schema = mongoose.Schema // Schema :: structure of table

const BookSchema = new Schema({
    bookName : { type : String , required : true},
    bookCode : { type : String , required : true},
    bookTitle : { type : String , required : true},
    authorName : { type : String , required : true},
    isbnNumber : { type : String , required : true},
    price : { type : String , required : true},
    publishedDate : { type : Date , required : true},
    sampleCopy : { type : String , required : true},
    isPurchaseable : { type : String , required : true}
})

module.exports = mongoose.model('Book' , BookSchema)