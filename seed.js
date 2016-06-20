/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Quote = db.model('quote');
var fs = require('fs');
var Promise = require('sequelize').Promise;

var files = ['./scripts/episode1.txt', './scripts/episode2.txt', './scripts/episode3.txt', './scripts/episode4.txt', './scripts/episode5.txt', './scripts/episode6.txt', './scripts/episode7.txt', './scripts/episode8.txt', './scripts/episode9.txt', './scripts/episode10.txt', './scripts/episode11.txt', './scripts/episode12.txt', './scripts/episode14.txt', './scripts/episode15.txt', './scripts/episode16.txt', './scripts/episode17.txt', './scripts/episode18.txt', './scripts/episode19.txt', './scripts/episode20.txt', './scripts/episode21.txt', './scripts/episode22.txt']

    // var seedUsers = function() {

//     var users = [{
//         email: 'testing@fsa.com',
//         password: 'password'
//     }, {
//         email: 'obama@gmail.com',
//         password: 'potus'
//     }];

//     var creatingUsers = users.map(function(userObj) {
//         return User.create(userObj);
//     });

//     return Promise.all(creatingUsers);

// };

var seedQuotes = function() {

    var readfiles = [];

    //create array of read files, split at new line
    files.forEach(function(file) {
        readfiles.push(fs.readFileSync(file).toString().split('\n'))
    })

    var quoteArray = [];

    //split each array element at ':'
    readfiles.forEach(function(fileArray) {
        fileArray.forEach(function(string) {
            quoteArray.push(string.split(':'))
        })
    })

    //reduce file arrays into one one array
    var quotes = quoteArray.reduce(function(file1, file2) {
        return file1.concat(file2)
    })

    //map over each element in array assigning 'character' and 'quote'
    var quotes = quoteArray.map(function(dialog) {
        return {
            character: dialog[0],
            quote: dialog[1]
        };
    });

    var creatingQuotes = quotes.map(function(quoteObj) {
        return Quote.create(quoteObj);
    });

    return Promise.all(creatingQuotes);
};

db.sync({ force: true })
    // .then(function() {
    //     return seedUsers();
    // })
    .then(function() {
        return seedQuotes();
    })
    .then(function() {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function(err) {
        console.error(err);
        process.exit(1);
    });
