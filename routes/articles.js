const express = require('express');
const router = express.Router();

//@Controllers
const {
  deleteArticle,
  getArticles,
  getArticlesById,
  postArticle,
  updateArticle
} = require('../src/Controllers/ArticleController')

//@Routes=======================================================================

// [GET]/articles/:   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST
router.get('/', async (req, res) => {
  try {
    const articles = await getArticles()
    res.status(200).send({ data: articles });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

// [GET]/articles/{id}: Obter a informação somente de um artigo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const article = await getArticlesById(id)
    res.status(200).send({ data: article });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

// [POST]/articles/: Adicionar um novo artigo
router.post('/', async (req, res) => {
  try {
    const {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events
    } = req.body;

    const timeElapsed = Date.now();
    const publishedAt = new Date(timeElapsed).toISOString()

    const article = await postArticle({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events
    })
    res.status(200).send({ data: article });

  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// [PUT]/articles/{id}: Atualizar um artigo baseado no id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const updatedArticle = await updateArticle(id, updates)
    res.status(200).send({ data: updatedArticle });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// [DELETE]/articles/{id}: Remover um artigo baseado no id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedArticle = await deleteArticle(id)
    res.status(204).send({ data: deletedArticle })
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;