const Book = require('../models/Book');

const createBook = async (req,res) => {
    try {
        console.log(req.body);
        let book = new Book(req.body)
        book = await book.save();
        res.status(200).send({success : true , message : 'Book Created Successfully ' , data : book });
    } catch (error) {
        console.log(error);
        res.status(200).send({success : false , message : 'Something went wrong ' , data : '' });
    }
}


module.exports = {
    createBook
}


// 200 :: represents ok