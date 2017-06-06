const express = require('express')
const app = express()
var mongoose = require('mongoose');
var ActivitiesModel = require('./db/schema.js');


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/activities', function (req, res) {
  ActivitiesModel.find({name: 'Football'}, function(err, activity){
    res.send(activity[0].name)
  })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
