const axios = require('axios');

const ArticleModel = require('../src/Models/ArticleModel')

const getArticlesCount = async () => {
  const { data } = await axios('https://api.spaceflightnewsapi.net/v3/articles/count')
  return data
}

const getDataFromApi = async () => {
  try {
    const articlesCount = await getArticlesCount()
    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${articlesCount}`
    const { data } = await axios(apiUrl)
    await ArticleModel.insertMany(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = getDataFromApi