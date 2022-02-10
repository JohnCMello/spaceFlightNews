const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const ArticleModel = require('../Models/ArticleModel');

// @Controllers=================================================================

//GET
const getArticles = () => ArticleModel.find({});
const getArticlesById = (id) => ArticleModel.findOne({ _id: ObjectId(id) });

//POST
const postArticle = (body) => ArticleModel.create(body);

//PUT
const updateArticle = (id, updates) => ArticleModel.findByIdAndUpdate({ _id: ObjectId(id) }, updates, { new: true })

//DELETE
const deleteArticle = (id) => ArticleModel.findByIdAndRemove({ _id: ObjectId(id) });

module.exports = {
  getArticles,
  getArticlesById,
  postArticle,
  updateArticle,
  deleteArticle
}