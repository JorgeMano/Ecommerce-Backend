const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const ProductInCart = sequelize.define('productInCart', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cartid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    productid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'active'
    }
});

module.exports = { ProductInCart };