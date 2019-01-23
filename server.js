const express = require('express')
const app = express()
const fs = require('fs');
var $ = require('jquery')
var data = require('./data/data.json')

app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get('/', function(req, res) {
    dataToEJS = {
        data: data
    }
    res.render('index', dataToEJS)
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
