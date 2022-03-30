const express = require('express');

const {
    createNewUser,
    loginUser,
    getAllProducts,
    updateUser,
    disableUser,
    getAllPurchases,
    getPurchaseById
} = require('../controllers/users.controller'); 

const router = express.Router();

router.post('/', createNewUser);
router.post('/login', loginUser);
router.get('/', getAllProducts);
router.patch('/:id', updateUser);
router.delete('/:id', disableUser);
router.get('/', getAllPurchases);
router.get('/:id', getPurchaseById);

module.exports = { usersRouter: router };
