// var assert = require('assert');
// const Browser = require('zombie');
// Browser.localhost('http://localhost:3000/', 3000)
//
// describe('Main', function() {
//   const browser = new Browser();
//
//   describe('#index()', function() {
//     it('return Hello World!', function() {
//       browser.visit('/', function() {
//         browser.assert.status(404);
//       });
//     });
//   });
// });
const app = require('../index.js');
const assert = require('assert');

const Browser = require('zombie');
const url = "http://localhost:3000/";
const browser = new Browser();

describe('Test', function() {
  it('returns Hello World!', function() {
    browser.visit(url, function() {
      browser.assert.text('body', 'This is not right!');
    });
  });
});
