const router = require("express").Router();
const chartsController = require("../../controllers/chartsController");

// Matches with "/api/charts"
router.route("/")
    .get(chartsController.findAll)
    .post(chartsController.create);

// Matches with "/api/charts/:id"
router
    .route("/:id")
    .get(chartsController.findById)
    .put(chartsController.update)
    .delete(chartsController.remove);

module.exports = router;