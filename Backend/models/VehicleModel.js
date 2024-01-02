const mongoose = require("mongoose")
let Vehicle = require("../models/VehicleModel");


const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehicle_id: {
        type: String,
        required: true
    },

     registration_no: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    fuel_type: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },


    date: {
        type: String,
        required: true
    },


   
});


const Vehicle1 = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle1;