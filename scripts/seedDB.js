const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/abode"
);

const itemSeed = [
  {
    category: "Cleaning Supplies",
    name: "Bleach",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Dishwashing Detergent",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Dishwashing Liquid",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Dryer Sheets",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Laundry Detergent",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Sponges",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Cleaning Supplies",
    name: "Vacuum Cleaner Bags",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Batteries - AA",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Batteries - AAA",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Batteries - 9V",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Bug spray",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Light Bulbs - Household",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "General Household",
    name: "Light Bulbs - Flood",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Groceries",
    name: "Coffee",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Groceries",
    name: "Coffee Pods",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Groceries",
    name: "Pasta",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Flea Control",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Food",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Heartworm Control",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Litter",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Toys",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Pet Supplies",
    name: "Pet Treats",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Office Supplies",
    name: "Printer cartridges",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Office Supplies",
    name: "Printer paper",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Office Supplies",
    name: "Toner cartridges",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby diapers",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby formula",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby lotion",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby snacks",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Baby Products",
    name: "Baby wipes",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Body Wash",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Conditioner",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Deodrant",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Mouthwash",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Razor blades",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Shampoo",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Soap",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
  {
    category: "Personal hygiene",
    name: "Toothpaste",
    quantity: "0",
    notes: "",
    date: new Date(Date.now())
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
