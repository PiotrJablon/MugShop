const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);

router.get('/product/:id', ProductController.getOne);

module.exports = router;