var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentInfo;
  ctrl.studentJobs;
  // ctrl.update = m.request({ method: 'POST', url: '/me'}, data: )


  //TODO: DRY http requests
  m.request({ method: 'GET', url: '/me'})
    .then(function(info) {
      ctrl.studentInfo = m.prop();
      return ctrl.studentInfo(info);
    });

  m.request({ method: 'GET', url: '/api/jobs'})
    .then(function(jobs) {
      ctrl.studentJobs = m.prop();
      return ctrl.studentJobs(jobs);
    });


  
};

exports.view = function (ctrl) {
  //TODO: Setup POST request to /me
  console.log(ctrl.studentInfo().user.email);
  return m('.col.s12.m6', [
    m('.row', ctrl.studentInfo().user.name),
    m('.row', ctrl.studentInfo().user.email),
    m('.row', ctrl.studentInfo().user.status || 'Status'),
    m('.row', ctrl.studentInfo().user.active || 'Active'),
    m('.row', ctrl.studentInfo().user.school || 'School'),
    m('.row', ctrl.studentInfo().user.company || 'Company'),
    m('.row', [
      m('img[src=' + ctrl.studentInfo().user.avatar_url +']')
    ])
  ]);
};