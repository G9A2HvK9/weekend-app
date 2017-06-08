const app = require('../index.js');
const assert = require('assert');
const Browser = require('zombie');
const url = "http://localhost:3000/";
const browser = new Browser();
var ActivitiesModel = require('../db/schema.js');

describe('Activities schema', function() {
  it('retrieves activities list from database', function(done) {
    ActivitiesModel.create({name: 'Football', cost: 60, tubeStation: 'Hackney Central'})
    browser.visit(url + 'activities').then(function() {
      browser.assert.text('body', 'Football');
      done();
    });
  });
});

describe('Home page', function() {
  it('has a map displayed on screen', function() {
    browser.visit(url).then(function() {
      browser.assert.element('#map');
    });
  });
});
