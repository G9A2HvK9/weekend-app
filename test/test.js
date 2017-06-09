const app = require('../app.js');
const assert = require('assert');
const Browser = require('zombie');
const url = "http://localhost:3000/";
const browser = new Browser();

describe('Home page', function() {
  it('has a map displayed on screen', function() {
    browser.visit(url).then(function() {
      browser.assert.element('#map')
    });
  });

  it('displays names on the page', function() {
    browser.visit(url).then(function() {
      browser.assert.text('body', 'Costa')
    });
  });
});
