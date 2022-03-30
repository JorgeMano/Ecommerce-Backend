const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'active'
    },

    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = { Product };