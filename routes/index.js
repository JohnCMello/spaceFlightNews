const express = require('express');
const router = express.Router();

// [GET]/:  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"
router.get('/', async (req, res) => {
  try {
    res.status(200).send(`Back-end Challenge 2021 🏅 - Space Flight News`);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router