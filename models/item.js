const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    quantity: Number,
    notes: String,
    date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;