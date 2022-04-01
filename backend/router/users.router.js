const express = require('express');

const {
    createNewUser,
    loginUser,
    getAllUsers,
    updateUser,
    disableUser,
    getAllPurchases,
    getUserById
} = require('../controllers/users.controller'); 

const router = express.Router();

router.post('/', createNewUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.patch('/:id', updateUser);
router.delete('/:id', disableUser);
router.get('/', getAllPurchases);
router.get('/:id', getUserById);

module.exports = { usersRouter: router };
