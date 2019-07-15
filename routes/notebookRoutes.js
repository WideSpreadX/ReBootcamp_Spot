var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/notebooks", function (req, res) {
        db.Notebook.findAll({}).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });

    // Create a new example
    app.post("/api/notebooks", function (req, res) {
        db.Notebook.create(req.body).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });

    // Delete an example by id
    app.delete("/api/notebooks/:id", function (req, res) {
        db.Notebook.destroy({ where: { id: req.params.id } }).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });
};
