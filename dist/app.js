'use strict';

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _teamspeak = require('./modules/teamspeak');

var _teamspeak2 = _interopRequireDefault(_teamspeak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var start = Date.now();

(0, _teamspeak2.default)(start);

var forum = (0, _requestPromise2.default)('https://dev.zauartcc.org/forum');
var mainSite = (0, _requestPromise2.default)('https://www.zauartcc.org/');
var admin = (0, _requestPromise2.default)('https://www.zauartcc.org/admin');
var setmore = (0, _requestPromise2.default)('https://zauartcc.setmore.com');
var slack = (0, _requestPromise2.default)('https://zauartcc.slack.com');
var moodle = (0, _requestPromise2.default)('https://training.dev.zauartcc.org');

forum.then(function () {
  console.log('Forum: %s ms', Date.now() - start);
}).catch(function () {
  console.log('Forum: Offline');
});

mainSite.then(function () {
  console.log('Main Site: %s ms', Date.now() - start);
}).catch(function () {
  console.log('Main Site: Offline');
});

admin.then(function () {
  console.log('Admin: %s ms', Date.now() - start);
}).catch(function () {
  console.log('Admin: Offline');
});

setmore.then(function () {
  console.log('Setmore: %s ms', Date.now() - start);
}).catch(function () {
  console.log('Setmore: Offline');
});

slack.then(function () {
  console.log('Slack: %s ms', Date.now() - start);
}).catch(function () {
  console.log('Slack: Offline');
});

moodle.then(function () {
  console.log('Moodle: %s ms', Date.now() - start);
}).catch(function () {
  console.log('Moodle: Offline');
});