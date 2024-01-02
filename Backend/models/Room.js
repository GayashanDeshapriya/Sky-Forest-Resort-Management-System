const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({

    room_no : {
        type : Number,
        required : true
    },
    catagory : {
        type : String,
        required : true
    }, 
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    type: {
        type : String,
        required : true
    },
    facilities : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    }
})

const Room = mongoose.model("Room",roomSchema);

module.exports = Room;