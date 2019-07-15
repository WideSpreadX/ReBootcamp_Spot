var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Resource = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ResourceSchema = new Resource({
    titleResource: String,
    resource: String,
    url: String
});

// This creates our model from the above schema, using mongoose's model method
var Resource = mongoose.model("Resource", ResourceSchema);

// Export the Note model
module.exports = Resource;
