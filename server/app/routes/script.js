'use strict';
var db = require('../../db/_db');
var Quote = db.model('quote');
var router = require('express').Router();

module.exports = router;

router.get('/', function(req, res, next) {

    Quote.findAll({})
        .then(function(quotes) {
            res.json(quotes)
        })
        .catch(next)
})
