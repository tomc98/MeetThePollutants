const express = require('express')
const terms = express()


//get home page
terms.get('/', function(req, res) {
    res.render('terms', res)
})

module.exports = terms;
