const dotenv = require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const connectDB = require('./config/db');
const app = express()

const PORT = process.env.PORT || 3000;

(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
    connectDB()
  } catch (error) {
    console.log(error);
  }
})()