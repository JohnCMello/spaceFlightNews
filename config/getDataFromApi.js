const axios = require('axios');

const ArticleModel = require('../src/Models/ArticleModel')

const getDataFromApi = async () => {
  try {
    const { data } = await axios(`https://api.spaceflightnewsapi.net/v3/articles`)
    await ArticleModel.insertMany(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = getDataFromApi