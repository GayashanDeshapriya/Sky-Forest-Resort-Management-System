const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodschema = new Schema({

    menuno : {
        type : Number,
        require : true
     },
     food1 : {
        type : String,
        require: true
     },
     food2 : {
        type : String,
        require: true
     },
     food3 : {
        type : String,
        require: true
     },
     price : {
        type : Number,
        require :true
     }
     
})

const food = mongoose.model("food",foodschema);

module.exports = food;