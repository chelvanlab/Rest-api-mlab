var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

app.use(bodyparser.json());
var Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:admin123@ds235418.mlab.com:35418/bookshop');

var connection  = mongoose.connection;

connection.once('open',()=>{
    console.log('Mongo is connected with sales');
});

var purch = new Schema({
    quantity:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    address:{
        type:String
    },
    __v:{
        type:String
    }
    
});

var purchase = connection.model('purchase', purch);

router.route('/purchases').get((req, res)=>{
    purchase.find((err, sales)=>{
        if(err)
            console.log(err);
        else
            res.json(sales);
    })
});

app.use('/',router)
app.listen(4000,()=>console.log("Express running on 4000"));