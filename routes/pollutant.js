const express = require('express');
const pollutant = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Password!1',
    database: 'POLLUTANTS'
});

connection.connect();
connection.query("SELECT * FROM `Pollutants`", function(err, rows, fields) {
    if (err) throw err

    //console.log(rows);
});

connection.end();

//dynamic data is added here.
var data = require('../data/data.json');

//get home page
pollutant.get('/', function(req, res) {
    dataToEJS = {
        data: data,
        id: req.query.id
    }
    res.render('pollutant', dataToEJS)
})

module.exports = pollutant;
