const router = require("express").Router();
const taskRoutes = require("./tasks");

// Book routes
router.use("/tasks", taskRoutes);

module.exports = router;