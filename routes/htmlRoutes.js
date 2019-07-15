/* var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        db.Note.findAll({}).then(function (coder_kiosk_db) {
            res.render("index", {
                msg: "Welcome!",
                examples: coder_kiosk_db
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/landing/:id", function (req, res) {
        db.Note.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
            res.render("landing", {
                landing: coder_kiosk_db
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};
 */