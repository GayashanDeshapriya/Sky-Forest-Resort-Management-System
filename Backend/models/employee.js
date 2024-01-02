const { default: mongoose } = require("mongoose");
const nmongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empid : {
        type : String,
        required: true
    },
    empname : {
        type : String,
        required: true
    },
    NIC: {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    jobtype : {
        type : String,
        required: true
    },
    basicsalary : {
        type : String,
        required: true
    },

})



const employeee = mongoose.model("employee",employeeSchema);
module.exports = employeee;

