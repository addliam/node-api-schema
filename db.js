const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:TryHackM3@localhost:5432/biblioteca');

module.exports = {
    sequelize, 
    DataTypes
}