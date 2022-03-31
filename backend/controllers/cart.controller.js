const bcrypt = require('bcriptjs');
//const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { Cart } = require('../models/carts.model');
const { catchasync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');
const { filterObj } = require('../util/filterObject');

dotenv.config({ path: '.config.env' });

exports.addProduct = catchasync(async(req, res, next) => {
    const { userid } = req.body;
    if(!userid) {
        return next(
            new AppError(400, 'Must provid a valid , userid')
        );
    }
    const newCart = await Cart.create({
        userid
    });
    res.status(200).json({
        status: 'success',
        data: {
            newCart
        }
    });
});

exports.updateCart = async(req, res) => {
    try {
        const { id } = req.params;
        const data = filterObj(req.body, 'userid');
        const cart = await Cart.findOne({
            where : {id: id, status: 'active'}
        });
        if (!userid) {
            res.status(404).json({
                status: 'error',
                message: 'Cant update cart, invalid ID'
            });
            return; 
        }
        await cart.update({ ...data });
        res.status(204).json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
    }
};

exports.removeProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findOne({
            where: { id: id, status: 'active' }
        });
        if (!id) {
            res.status(404).json({
                status: 'error',
                message: 'Cant remove product, invalid ID'
            });
            return;
        }
        await cart.update({ status: 'removed' });
        res.status(204).json({
            status: 'success',
        }) 
    } catch (error) {
        console.log(error);
    }
}; 

exports.purchase = catchasync(async(req, res, next) => {
    const { id, status } = req.body;
    const cart = await Cart.findOne({
        where: { id:id, status: 'active' }
    })

    if (!id) {
        return next(
            new AppError(400, 'Must provide a valid id')
        );
    }

    const newPurchase =  await Cart.create({
        id,
        username
    });

    res.status(200).json({
        status: 'success',
        data: {
            cart
        }
    })
});