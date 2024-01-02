const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    name : {
        type : String,
        require : true
     },
     packages : {
        type : String,
        require: true
     },
     price : {
        type : Number,
        require :true
     },
     cardnumber : {
        type : Number,
        require : true
     },
     MM : {
        type : Number,
        require : true
     },
     YY : {
      type : Number,
      require : true
     },
     cvv : {
      type : Number,
      require : true
     }
})

const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;