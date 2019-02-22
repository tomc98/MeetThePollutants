const express = require('express')
const about = express()


//get home page
about.get('/', function(req, res) {
    res.render('about', res)
})

module.exports = about;
