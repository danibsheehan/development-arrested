'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = function(db) {

    return db.define('quote', {
        character: Sequelize.STRING(),
        quote: Sequelize.TEXT()
    });
};
