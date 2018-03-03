var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  title: String,
  image: String,
  content: String,
  featured: Boolean,
  date: String
});

var News = mongoose.model('News', newsSchema);

module.exports = News;
