const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Order = sequelize.define('order', {
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

    cartid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    issueAt: {},

    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'active'
    }
}); 

module.exports = { Order };