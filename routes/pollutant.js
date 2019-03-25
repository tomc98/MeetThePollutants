const express = require('express');
const pollutant = express();
var mysql = require('mysql');

var data = require('../data/data.json');

//get home page
pollutant.get('/', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'Password!1',
        database: 'POLLUTANTS'
    });

    connection.connect();
    connection.query("SELECT * FROM `Pollutants` where Pollutant.ID = " + req.query.id + ";", function(err, rows, fields) {
        if (err) throw err



        //console.log(rows);
        dataToEJS = {
            data: data
        }
        res.render('pollutant', dataToEJS)
        connection.end();
    });

})

module.exports = pollutant;
