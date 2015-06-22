var m = require('mithril');
var Navbar = require('../../components/navbar/navbar.js');

exports.controller = function () {
  var ctrl = this;
};

exports.view = function (ctrl) {
  return m('.page', [
    m('.words', 'Hello'),
    m('.words', 'Hello')
    ]);
};
