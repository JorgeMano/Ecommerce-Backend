const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Cart = sequelize.define('cart', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

module.exports = { Cart };