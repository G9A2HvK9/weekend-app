import React from 'react';
import ReactDOM from 'react-dom';
var mongoose = require('mongoose');
var ActivitiesModel = require('./db/schema.js');


function filter() {
  const activity = ActivitiesModel.find()
  ReactDOM.render(activity, document.getElementById('route'))
}
