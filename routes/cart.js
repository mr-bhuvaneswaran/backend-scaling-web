const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart');

router.put('/cart', CartController.updateCart)

module.exports = router;