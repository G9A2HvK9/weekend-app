const app = require('../index.js');
const assert = require('assert');
const Browser = require('zombie');
const url = "http://localhost:3000/";
const browser = new Browser();
var activitiesSchema = require('../db/schema')

describe('Test', function() {
  it('returns Hello World!', function(done) {
    browser.visit(url).then(function() {
      browser.assert.text('body', 'Hello World!');
      done();
    });
  });
});

describe('Activities schema', function() {
  it('retrieves activities list from database', function(done) {
    browser.visit(url + 'activities').then(function() {
      browser.assert.text('body', 'Football');
      done();
    });
  });
});
