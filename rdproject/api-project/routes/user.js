const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')


router.post('/user/create' , (req,res) => {
    UserController.createUser(req,res)
}
)

router.get('/users/list' , (req,res) => {
    UserController.getUsersList(req,res)
})

module.exports = router