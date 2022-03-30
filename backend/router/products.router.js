const express = require('express');

const {
    createNewProduct,
    getAllProducts,
    getProductsById,
    updateProduct,
    disableProduct
} = require('../controllers/products.controller');

const router = express.Router();

router.post('/', createNewProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductsById);
router.patch('/:id', updateProduct);
router.delete('/:id', disableProduct);

module.export = { productsRouter };