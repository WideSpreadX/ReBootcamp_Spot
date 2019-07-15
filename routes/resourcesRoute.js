/* var db = require("../models");

module.exports = function (app) {
    // Get all resources
    app.get("/api/resources", function (req, res) {
        db.Resource.findAll({}).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });

    // Create a new resource
    app.post("/api/resources", function (req, res) {
        db.Resource.create(req.body).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });

    // Delete a resource by id
    app.delete("/api/resources/:id", function (req, res) {
        db.Resource.destroy({ where: { id: req.params.id } }).then(function (coder_kiosk_db) {
            res.json(coder_kiosk_db);
        });
    });
};
 */