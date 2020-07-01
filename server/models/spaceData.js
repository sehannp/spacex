const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

const spaceData = sequelize.define('spaceData', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    location: {
        type: Sequelize.STRING(2000),
        allowNull: true
    },

});

module.exports = spaceData;