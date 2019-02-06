const express = require('express')
const privacyPolicy = express()


//get home page
privacyPolicy.get('/', function(req, res) {
    res.render('privacyPolicy', res)
})

module.exports = privacyPolicy;
