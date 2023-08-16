const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Teacher = sequelize.define('Teacher', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Teacher;
