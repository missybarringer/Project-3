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
    quantity: "3",
    notes: "Clorox",
    date: new Date("7/17/2019").toDateString()
  },
  {
    category: "Cleaning Supplies",
    name: "Dishwashing Detergent",
    quantity: "20",
    notes: "Cascade Complete",
    date: new Date("7/11/2019").toDateString()
  },
  {
    category: "Cleaning Supplies",
    name: "Dishwashing Liquid",
    quantity: "2",
    notes: "Dawn",
    date: new Date("7/10/2019").toDateString()
  },
  {
    category: "Cleaning Supplies",
    name: "Dryer Sheets",
    quantity: "4",
    notes: "Bounce",
    date: new Date("7/12/2019").toDateString()
  },
  {
    category: "Cleaning Supplies",
    name: "Laundry Detergent",
    quantity: "1",
    notes: "Tide",
    date: new Date("8/1/2019").toDateString()
  },
  {
    category: "Cleaning Supplies",
    name: "Sponges",
    quantity: "5",
    notes: "Generic",
    date: new Date("8/10/2019").toDateString()
  },
  {
    category: "Cleaning Supplies",
    name: "Vacuum Cleaner Bags",
    quantity: "2",
    notes: "Hoover",
    date: new Date("7/25/2019").toDateString()
  },
  {
    category: "General Household",
    name: "Batteries - AA",
    quantity: "15",
    notes: "Duracell",
    date: new Date("7/24/2019").toDateString()
  },
  {
    category: "General Household",
    name: "Batteries - AAA",
    quantity: "18",
    notes: "Engergizer",
    date: new Date("7/10/2019").toDateString()
  },
  {
    category: "General Household",
    name: "Batteries - 9V",
    quantity: "5",
    notes: "Amazon Essentials",
    date: new Date("7/11/2019").toDateString()
  },
  {
    category: "General Household",
    name: "Bug spray",
    quantity: "2",
    notes: "With Deet",
    date: new Date("7/9/2019").toDateString()
  },
  {
    category: "General Household",
    name: "Light Bulbs - Household",
    quantity: "11",
    notes: "Incandescent",
    date: new Date("7/11/2019").toDateString()
  },
  {
    category: "General Household",
    name: "Light Bulbs - Flood",
    quantity: "3",
    notes: "45w",
    date: new Date("7/19/2019").toDateString()
  },
  {
    category: "Groceries",
    name: "Coffee",
    quantity: "1",
    notes: "Whole Bean - Bongo Java - Medium Roast",
    date: new Date("7/20/2019").toDateString()
  },
  {
    category: "Groceries",
    name: "Coffee Pods",
    quantity: "50",
    notes: "Costco - San Francisco Recyclable Keurig Pods",
    date: new Date("7/30/2019").toDateString()
  },
  {
    category: "Groceries",
    name: "Pasta",
    quantity: "2",
    notes: "Barilla - Gnocchi, Farfalle",
    date: new Date("7/16/2019").toDateString()
  },
  {
    category: "Pet Supplies",
    name: "Pet Flea Control",
    quantity: "1",
    notes: "Bravecto - 5-10 lbs",
    date: new Date("9/10/2019").toDateString()
  },
  {
    category: "Pet Supplies",
    name: "Pet Food",
    quantity: "25",
    notes: "Blue Buffalo - Senior Life Protection, Small Bites",
    date: new Date("8/10/2019").toDateString()
  },
  {
    category: "Pet Supplies",
    name: "Pet Heartworm Control",
    quantity: "6",
    notes: "TriHeart Plus",
    date: new Date("7/7/2019").toDateString()
  },
  {
    category: "Pet Supplies",
    name: "Pet Litter",
    quantity: "10",
    notes: "World's Best Litter",
    date: new Date("8/11/2019").toDateString()
  },
  {
    category: "Pet Supplies",
    name: "Pet Toys",
    quantity: "3",
    notes: "Rawhide, Squeak toys",
    date: new Date("6/10/2019").toDateString()
  },
  {
    category: "Pet Supplies",
    name: "Pet Treats",
    quantity: "30",
    notes: "Greenies - Teenie",
    date: new Date("7/2/2019").toDateString()
  },
  {
    category: "Office Supplies",
    name: "Printer cartridges",
    quantity: "1",
    notes: "On Amazon",
    date: new Date("7/1/2019").toDateString()
  },
  {
    category: "Office Supplies",
    name: "Printer paper",
    quantity: "2",
    notes: "basic white",
    date: new Date("8/10/2019").toDateString()
  },
  {
    category: "Office Supplies",
    name: "Toner cartridges",
    quantity: "3",
    notes: "Generic",
    date: new Date("7/28/2019").toDateString()
  },
  {
    category: "Baby Products",
    name: "Baby diapers",
    quantity: "50",
    notes: "Pullups",
    date: new Date("7/18/2019").toDateString()
  },
  {
    category: "Baby Products",
    name: "Baby formula",
    quantity: "16",
    notes: "Organic",
    date: new Date("7/14/2019").toDateString()
  },
  {
    category: "Baby Products",
    name: "Baby lotion",
    quantity: "1",
    notes: "Dove",
    date: new Date("7/22/2019").toDateString()
  },
  {
    category: "Baby Products",
    name: "Baby snacks",
    quantity: "1",
    notes: "Gerber",
    date: new Date("7/22/2019").toDateString()
  },
  {
    category: "Baby Products",
    name: "Baby wipes",
    quantity: "3",
    notes: "J&J",
    date: new Date("7/16/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Body Wash",
    quantity: "1",
    notes: "Dove",
    date: new Date("7/19/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Conditioner",
    quantity: "2",
    notes: "Pantene",
    date: new Date("7/14/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Deodrant",
    quantity: "2",
    notes: "Dove",
    date: new Date("7/13/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Mouthwash",
    quantity: "4",
    notes: "Listerine",
    date: new Date("7/21/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Razor blades",
    quantity: "3",
    notes: "Venus",
    date: new Date("7/10/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Shampoo",
    quantity: "2",
    notes: "Redken",
    date: new Date("7/18/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Soap",
    quantity: "1",
    notes: "Dove",
    date: new Date("7/31/2019").toDateString()
  },
  {
    category: "Personal hygiene",
    name: "Toothpaste",
    quantity: "3",
    notes: "Colgate Complete - Paste",
    date: new Date("7/20/2019").toDateString()
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
