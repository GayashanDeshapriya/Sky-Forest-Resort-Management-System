const { default: mongoose } = require("mongoose");
const nmongoose = require("mongoose");

const Schema = mongoose.Schema;

const KitchenStockSchema = new Schema({
    Date : {
        type : Date,
        required: true
    },
    itemId: {
        type : String,
        required: true
    },
    itemName: {
        type : String,
        required: true
    },
    itemPrice : {
        type : String,
        required: true
    },
    itemDescription : {
        type : String,
        required: true
    },
    itemCategory : {
        type : String,
        required: true
    },
})

const KitchenStock = mongoose.model("KitchenStock",KitchenStockSchema);
module.exports = KitchenStock;


