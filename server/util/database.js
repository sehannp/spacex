const {Sequelize} = require('sequelize');
const sequelize = new Sequelize
('rockets', 
'root', 
'2556505@Mysql',
{dialect: 'mysql',
host: 'localhost'});

module.exports = sequelize; 