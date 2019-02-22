const express = require('express')
const pollutantList = express()

//dynamic data is added here.
var data = require('../data/data.json')

//get home page
pollutantList.get('/', function(req, res) {
    dataToEJS = {
        data: data,
        req: req
    }
    res.render('pollutantList', dataToEJS)
})

module.exports = pollutantList;
