const axios = require('axios');

const ArticleModel = require('../src/Models/ArticleModel')

const getHighestId = async () => {
  try {
    const idList = await ArticleModel.distinct('id')
    if (!idList.length) return 1
    const highestId = idList.sort((a, b) => b - a)
    return highestId[0]
  } catch (error) {

  }
}

const getArticlesCount = async () => {
  const { data } = await axios('https://api.spaceflightnewsapi.net/v3/articles/count')
  return data
}

const insertNewArticlesIntoDB = async () => {
  try {
    const highestId = await getHighestId()
    if (!highestId) return
    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles?id_gt=${highestId}`
    const { data } = await axios(apiUrl)
    await ArticleModel.insertMany(data)
    console.log(highestId)
  } catch (error) {
    console.log(error)
  }
}

const getDataFromApi = async () => {
  try {
    const articleList = await ArticleModel.find({})
    const articlesCount = await getArticlesCount()
    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${articlesCount}`
    const { data } = await axios(apiUrl)

    if (articleList.length === 0) return await ArticleModel.insertMany(data)
    return
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getDataFromApi,
  insertNewArticlesIntoDB
} 