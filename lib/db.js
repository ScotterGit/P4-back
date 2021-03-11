const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:boot@localhost/p4stock', {logging: false});
module.exports = {sequelize};
