const react = require('react');
const reactDOM = require('react-dom');
const express = require('express');
const app = express();
var mongoose = require('mongoose');
var ActivitiesModel = require('./db/schema.js');


const element = (<h1>Hello World</h1>)
reactDOM.render(element, document.getElementById('route'))


// app.listen(3000, function () {
//    console.log('Example app listening on port 3000!');
// });
