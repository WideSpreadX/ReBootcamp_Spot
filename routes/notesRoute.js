var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/notes", function (req, res) {
        db.Note.findAll({}).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });

    // Create a new example
    app.post("/api/notes", function (req, res) {
        db.Note.create(req.body).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });

    // Delete an example by id
    app.delete("/api/notes/:id", function (req, res) {
        db.Note.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
            res.json(coder_kiosk_db);
        });
    });
};
