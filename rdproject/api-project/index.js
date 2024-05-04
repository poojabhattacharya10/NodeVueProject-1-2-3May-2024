const express  = require ('express')
const app = express()

const user = require('./routes/user')
const book = require('./routes/book')

const connect = require('./connection')

const bodyParser = require('body-parser')

const cors = require('cors');   // request and response handle from frontend(vue) to backend(node) or vice-versa 
app.use(cors());

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(user)
app.use(book)



connect();



app.listen(3000 , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running at port no. 3000 ... ');
    }
})