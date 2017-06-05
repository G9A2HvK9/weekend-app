const app = require('../index.js');
const assert = require('assert');
const Browser = require('zombie');
const url = "http://localhost:3000/";
const browser = new Browser();

describe('Test', function() {
  it('returns Hello World!', function(done) {
    browser.visit(url).then(function() {
      browser.assert.text('body', 'Hello World!');
      done();
    });
  });
});
