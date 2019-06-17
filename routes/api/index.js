const router = require("express").Router();
const itemRoutes = require("./items");

// Book routes
router.use("/items", itemRoutes);

module.exports = router;