const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoominventorySchema = new Schema({
  itemId: {
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  },
  itemQuantity: {
    type: Number,
    required: true
  },
  itemCategory: {
    type: String,
    required: true
  }
  
  
});

const RoomInventory = mongoose.model('RoomInventory', RoominventorySchema);

module.exports = RoomInventory;
