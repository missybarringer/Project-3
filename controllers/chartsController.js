const db = require("../models");

// Defining methods for the chartsController
//Only including methods for findall and findbyid.  Not sure if findbyid will get
//get used but leaving for now.
module.exports = {
    findAll: function(req, res) {
        db.Item
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};