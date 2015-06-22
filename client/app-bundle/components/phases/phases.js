var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
};

exports.view = function (ctrl) {
  return m('ul.collapsible[data-collapsible=accordion]', [
    m('li', [
      m('div.collapsible-header', 'In-Person Interview'),
      m('div.collapsible-body', 'List Students'),
    ]),
    m('li', [
      m('div.collapsible-header', 'Phone Interviews'),
      m('div.collapsible-body', 'List Students'),
    ]),
    m('li', [
      m('div.collapsible-header', 'Follow Ups'),
      m('div.collapsible-body', 'List Students'),
    ]),
    m('li', [
      m('div.collapsible-header', 'Element 4'),
      m('div.collapsible-body', 'List Students'),
    ])
  ]);
};
