var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Sales = new Schema({
    name:{
        type:String
    },
    mail:{
        type:String
    },
    working_route:{
        type:String
    },
    phone_no:{
        type:String
    },
    
});

export default mongoose.model('Sales',Sales);