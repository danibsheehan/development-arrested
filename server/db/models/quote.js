'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

  db.define('quote', {
  	character: Sequelize.STRING(),
    quote: Sequelize.TEXT()     
  });
};