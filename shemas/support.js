var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var supportSchema = new Schema({
  name: String,
  email: { type: String, required: true},
  message: String
});

var Support = mongoose.model('Support', supportSchema);

module.exports = Support;
