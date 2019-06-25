const router = require("express").Router();
const itemRoutes = require("./items");
const chartRoutes = require("./charts");

// Items routes
router.use("/items", itemRoutes);
// Chart routes
router.use("/charts", chartRoutes);

module.exports = router;