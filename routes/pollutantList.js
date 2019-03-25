const express = require('express')
const pollutantList = express()
var mysql = require('mysql');


//get home page
pollutantList.get('/', function(req, res) {
    var data = [];
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
        for (var i = 0; i < rows.length; i++) {
            data.push({
                Id: rows[i].ID,
                name: rows[i].Name,
                featureImg: Buffer.from(rows[i].Img).toString('base64'),
                description: rows[i].Description
            });
        }
        dataToEJS = {
            data: data,
            req: req
        }
        res.render('pollutantList', dataToEJS)
        connection.end();
    });


})

module.exports = pollutantList;
