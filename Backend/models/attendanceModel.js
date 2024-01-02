const { default: mongoose } = require("mongoose");
const nmongoose = require("mongoose");

const Schema = mongoose.Schema;


const attendanceSchema = new Schema({

    empid : {
        type : Number,
        required: true
    },
    date : {
        type : Date,
        required: true
    },

    shift: {
        type : String,
        required: true
    },
    
})

const attendance = mongoose.model("attendance",attendanceSchema);
module.exports = attendance;