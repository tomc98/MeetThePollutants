const express = require('express')
const videos = express()


//get home page
videos.get('/', function(req, res) {
    res.render('videos', res)
})

module.exports = videos;
