var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/weekend_test');

var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {

 });

// var Schema = mongoose.Schema;
// var userSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   userName: String,
//   email: String,
//   password: String,
//   dob: Date,
//   address: [addressSchema],
// });
//
// var addressSchema = new Schema({
//   houseNumber: String,
//   street: String,
//   city: String,
//   postcode: String,
// });

var Schema = mongoose.Schema;
var activitiesSchema = new Schema({
  name: String,
  cost: Number,
  tubeStation: String,
});

module.exports = activitiesSchema;
