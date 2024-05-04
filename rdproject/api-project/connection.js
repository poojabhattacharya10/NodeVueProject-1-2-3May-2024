// 27017 :: portno for mongodb
// mongodb :: protocol
// tables :: collections :: models

const mongoose = require('mongoose')
const connect = async() => {
    try{
        let connection = await mongoose.connect(`mongodb://localhost:27017/rdproject-2-may` , {useNewUrlParser:true,} )
        console.log('Db connected');
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connect
// {useNewUrlParser:true,}
// noderd-23-april :: db name