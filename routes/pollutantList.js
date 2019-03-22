const express = require('express')
const pollutantList = express()
var mysql = require('mysql');

//get home page
pollutantList.get('/', function(req, res) {
    //vars to use
    var data = [];
    var rows = [];

    //connection to database
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'Password!1',
        database: 'POLLUTANTS'
    });

    connection.connect();
    connection.query("SELECT * FROM `Pollutants`", function(err, rows, fields) {
        if (err) throw err
        rows = rows;
    });
    for (var i = 0; i < rows.length; i++) {

        data.push({
            Id: rows[i].ID,
            name: rows[i].Name,
            featureImg: "/polluntant/grosspollutants/grosspollutants.png",
            description: rows[i].Description
        });
    }
    console.log(data);
    connection.end();

    dataToEJS = {
        data: data,
        req: req
    }
    res.render('pollutantList', dataToEJS)
})

module.exports = pollutantList;
