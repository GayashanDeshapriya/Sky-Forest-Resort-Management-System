const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema=new Schema({

    ID:{
        type:Number ,
        required:true
    },


    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
    
})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;