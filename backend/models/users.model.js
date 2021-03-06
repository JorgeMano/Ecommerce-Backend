const { Datatypes } = require('sequelize');
const { sequelize } = require('../util/database');

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    password: {
        type: Datatypes.STRING(100),
        allowNull: false
    },

    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'active'
    }
});

module.exports = { User };