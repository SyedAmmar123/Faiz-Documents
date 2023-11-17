// models/crudModel.js

const mongoose = require('mongoose');

// Define your schema
const yourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const YourModel = mongoose.model('workout', yourSchema);

module.exports = YourModel;
