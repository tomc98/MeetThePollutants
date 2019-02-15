const express = require('express');
const pollutant = express();

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
