const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/abode"
);

const itemSeed = [
  {
    category: "Cleaning Supplies",
    name: "Bleach",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Dishwashing Detergent",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Dishwashing Liquid",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Dryer Sheets",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Laundry Detergent",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Sponges",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Vacuum Cleaner Bags",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Batteries - AA",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Batteries - AAA",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Batteries - 9V",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Bug spray",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Light Bulbs - Household",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Light Bulbs - Flood",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Groceries",
    name: "Coffee",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Groceries",
    name: "Coffee Pods",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Groceries",
    name: "Pasta",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Flea Control",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Food",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Heartworm Control",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Litter",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Toys",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Treats",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Office Supplies",
    name: "Printer cartridges",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Office Supplies",
    name: "Printer paper",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Office Supplies",
    name: "Toner cartridges",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby diapers",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby formula",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby lotion",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby snacks",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby wipes",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Body Wash",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Conditioner",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Deodrant",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Mouthwash",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Razor blades",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Shampoo",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Soap",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Toothpaste",
    quantity: "1",
    notes: "",
    date: new Date(Date.now())
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(1);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
