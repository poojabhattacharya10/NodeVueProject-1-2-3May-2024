const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')

router.post('/book/create' , (req,res) => {
    BookController.createBook(req,res)
})

module.exports = router