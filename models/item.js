const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: Array, required: true },
    quantity: Number,
    notes: String
}, { _id: false });

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;