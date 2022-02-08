const mongoose = require('mongoose');

const launchSchema = new mongoose.Schema({
  id: String,
  provider: String
}, {
  timestamps: true
});

const eventSchema = new mongoose.Schema({
  id: String,
  provider: String
}, {
  timestamps: true
});

const ArticleSchema = new mongoose.Schema({
  id: Number,
  featured: Boolean,
  title: String,
  url: String,
  imageUrl: String,
  newsSite: String,
  summary: String,
  publishedAt: String,
  launches: [launchSchema],
  events: [eventSchema]
});

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;