const express = require('express')
const app = express()
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost:27017/weekend_test');
var activitiesSchema = require('./db/schema')
var activities = connection.model('activities', activitiesSchema);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/activities', function (req, res) {
  res.send(activities.find({name: 'Bowling'}))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
