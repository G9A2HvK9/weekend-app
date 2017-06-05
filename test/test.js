var assert = require('assert');
const Browser = require('zombie');
const url = 'http://localhost:3000/'

describe('Main', function() {
  const browser = new Browser();

  describe('#index()', function() {
    it('return Hello World!', function() {
      browser.visit(url, function() {
        browser.assert.text('hieee');
      });
    });
  });
});
