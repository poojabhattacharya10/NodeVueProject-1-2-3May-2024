const User = require('../models/User')

const createUser =async (req,res) => {
    try {
        console.log(req.body);
        let user = new User(req.body)
        await user.save()
        res.status(200).send({success : true , message : 'User Created Successfully ' , data : user });
        // res.send({ message : 'Data Received Successfully ....'})
    } catch (error) {
        console.log(error);
        res.status(500).send({success : false , message : 'Something went wrong ' , data : '' });
    }
}

const getUsersList = async (req,res) => {
    try {
        let users = await User.find({});
        console.log(users , 'users');
        res.status(200).send({success : true , message : '' , data : users });
    } catch (error) {
        console.log(error);
        res.status(500).send({success : false , message : 'Something went wrong ' , data : '' });
    }
}

module.exports = {
    createUser,
    getUsersList
}

// 200 :: represents ok
// 500 :: server error
// 400 :: route not found