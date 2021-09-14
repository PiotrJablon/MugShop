const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orders.controller');

router.post('/formOrder', OrderController.addOne);

module.exports = router;