const dotenv = require('dotenv').config({ path: './config/config.env' });
const connectDB = require('./config/db');
const express = require('express');
const app = express()

const {
  getDataFromApi,
  insertNewArticlesIntoDB
} = require('./config/databaseUpdater')

app.use(express.json())

app.use('/', require('./routes/index'))
app.use('/articles', require('./routes/articles'))

const PORT = process.env.PORT || 3000;

(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
    connectDB()
    getDataFromApi()
    insertNewArticlesIntoDB()
  } catch (error) {
    console.log(error);
  }
})()