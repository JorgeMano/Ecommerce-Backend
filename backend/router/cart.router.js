const express = require('express');

const { 
    addProduct,
    updateCart,
    removeProduct,
    purchase
 } = require('../controllers/cart.controller');

 const router = express.Router();

 router.post('/add-product', addProduct);
 router.patch('/update-cart', updateCart);
 router.delete('/:productId', removeProduct);
 router.post('/purchase', purchase);

 module.exports = { cartsRouter: router };