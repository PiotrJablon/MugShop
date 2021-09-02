"use strict";

var express = require('express');

var router = express.Router();

var ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);
module.exports = router;