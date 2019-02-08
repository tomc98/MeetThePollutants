const express = require('express')
const app = express()
const fs = require('fs');
var $ = require('jquery')

//------ Routes section ------\\
var index = require('./routes/index');
var terms = require('./routes/terms');
var privacyPolicy = require('./routes/privacyPolicy');
var pollutantList = require('./routes/pollutantList');
var pollutant = require('./routes/pollutant');
var videos = require('./routes/videos');

app.set('view engine', 'ejs')
app.use(express.static('public'));

//----- Routing here -----\\
app.use('/', index);
app.use('/terms-and-conditions', terms);
app.use('/privacy-policy', privacyPolicy);
app.use('/pollutants', pollutantList);
app.use('/pollutant', pollutant);
app.use('/videos', videos);



app.listen(3000, function() {
    console.log('Website is open on port 3000!')
})
