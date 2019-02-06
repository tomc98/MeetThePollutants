const express = require('express')
const index = express()

let date = require('date-and-time');

//dynamic data is added here.
var data = require('../data/data.json')

//get home page
index.get('/', function(req, res) {
    dataToEJS = {
        data: data,
        day: day = DayOfYear(new Date())
    }
    res.render('index', dataToEJS)
})

module.exports = index;


//returns the days in a particular month
function MonthToDays(month, isLeap) {
    if (month == 2) {
        if (isLeap) {
            return 29;
        } else {
            return 28;
        }
    } else {
        if (month > 7) {
            if (month % 2) {
                return 30
            } else {
                return 31
            }
        } else {
            if (month % 2) {
                return 31
            } else {
                return 30
            }
        }
    }
}

//returns the day of the year.
function DayOfYear(now) {
    var total = 0;
    for (var i = 1; i < date.format(now, 'M'); i++) {
        total += parseInt(MonthToDays(i, date.isLeapYear(now)));
    }
    total += parseInt(date.format(now, 'D'));
    return total;
}
