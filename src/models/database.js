const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(`mysql://root:${process.env.MYSQL_ROOT_PASSWORD}@database:3306/${process.env.MYSQL_DATABASE}`)

exports.initDatabase = async () =>
{
    require('./person');

    try
    {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Connection has been established successfully.');
    }
    catch (error)
    {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

exports.sequelize = sequelize;
