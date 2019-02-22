const express = require('express');
const videos = express();

//dynamic data is added here.
var data = require('../data/data.json');

//get home page
videos.get('/', function(req, res) {
    dataToEJS = {
        data: data,
    }
    res.render('videos', dataToEJS)
})

module.exports = videos;
