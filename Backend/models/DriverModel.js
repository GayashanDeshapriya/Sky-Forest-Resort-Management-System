const mongoose = require("mongoose")
let Driver = require("../models/DriverModel");

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    driver_id: {
        type: String,
        required: true
    },

     name: {
        type: String,
        required: true
    },

    nic: {
        type: String,
        required: true
    },

    licence_no: {
        type: Number,
        required: true
    },

    contact_no: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },


   
});


const Driver1 = mongoose.model('Driver', DriverSchema);

module.exports = Driver1;