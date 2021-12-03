const {Sequelize} = require('sequelize');
const database = require('./database');

const Person = database.sequelize.define('person',
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:
    {
        type: Sequelize.STRING(255),
        allowNull: false
    }
});

module.exports = Person
