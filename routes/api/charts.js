const router = require("express").Router();
const chartsController = require("../../controllers/chartsController");

// Matches with "/api/charts"
router.route("/")
    .get(chartsController.findAll)

// Matches with "/api/charts/:id"
router
    .route("/:id")
    .get(chartsController.findById)

module.exports = router;