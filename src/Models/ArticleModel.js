const { Schema, model } = require('mongoose');

const launchSchema = new Schema({
  id: String,
  provider: String
}, {
  timestamps: true
});

const eventSchema = new Schema({
  id: String,
  provider: String
}, {
  timestamps: true
});

const ArticleSchema = new Schema({
  id: String,
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

const ArticleModel = model('Article', ArticleSchema);

module.exports = ArticleModel;