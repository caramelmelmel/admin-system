const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Teacher = sequelize.define('Teacher', {
    teacher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
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
