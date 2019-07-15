/*
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/notesController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
      );
  });
});

module.exports = app;
*/


//MONGODB SERVER








// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "coder_kiosk_db";
var collections = ["notes"];

// Use mongojs to hook the database to the db variable
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var mongoose = require("mongoose");
var db = mongojs(databaseUrl, collections);
var app = express();
mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/coder_kiosk_db");

var app = express();
var PORT = process.env.PORT || 3110;
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});

// Set the app up with morgan.
// morgan is used to log our HTTP Requests. By setting morgan to 'dev'
// the :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes,
// and uncolored for all other codes.
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Database configuration
var databaseUrl = "coder_kiosk_db";
var collections = ["notes"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// Simple index route
app.get("/", function (req, res) {
  res.send(index.html);
});


var noteSchema = new mongoose.Schema({
  title: String,
  note: String
});
var Note = mongoose.model("Note", noteSchema);
app.post("/submit", (req, res) => {
  var noteData = new Note(req.body);
  noteData.save()
    .then(item => {
      res.send("Your note was saved");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
/* app.post("/submit", function(req, res) {
  db.notes.insertOne(req.body), function(err, data) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(data);
    }
  };
}); */
// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================
app.get("/all", function (req, res) {
  db.notes.find({}, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});
// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
app.get("/find/:id", function (req, res) {
  db.notes.find({ _id: -1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});
// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// POST: /update/:id
// ================================================================
app.get("/delete:id", function (req, res) {
  db.notes.update({ _id }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
})
// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// GET: /delete/:id
// ==================================================================
app.get("/clearall", function (req, res) {
  db.notes.remove({ _id }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  })
})
// 6. Clear the entire note collection
// GET: /clearall
// ===================================

// Listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
