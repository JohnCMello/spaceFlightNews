require('dotenv').config({ path: './config/config.env' });
const connectDB = require('./config/db');
const cron = require('node-cron')
const express = require('express');
const app = express()

// TODO: Handle Errors

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
    cron.schedule('0 9 * * *', () => insertNewArticlesIntoDB())
  } catch (error) {
    console.log(error);
  }
})()