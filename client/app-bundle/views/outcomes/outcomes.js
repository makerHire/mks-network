var m = require('mithril');
var Phases         = require('../../components/phases/phases.js');
var OutcomesGraph  = require('../../components/outcomesGraph/outcomesGraph.js');
var Messaging      = require('../../components/messaging/messaging.js');

exports.controller = function() {
  var ctrl = this;
};

exports.view = function(ctrl) {

    return m('.page', [
        m.component(OutcomesGraph),
        m.component(Phases),
        m.component(Messaging)
    ]);
};