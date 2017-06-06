var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/weekend_test');


var activitiesSchema = new Schema({
  name: String,
  cost: Number,
  tubeStation: String,
});

var ActivitiesModel = mongoose.model('ActivitiesModel', activitiesSchema);
module.exports = ActivitiesModel;
