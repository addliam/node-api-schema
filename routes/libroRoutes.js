const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/libros', libroController.getAllBooks);
router.get('/libros/:id', libroController.inProgress);
router.post('/libros', libroController.createBook);
router.put('/libros/:id', libroController.inProgress);
router.delete('/libros/:id', libroController.inProgress);

module.exports = router