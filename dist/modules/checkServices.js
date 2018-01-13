'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkServices;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _checkSite = require('./checkSite.js');

var _checkSite2 = _interopRequireDefault(_checkSite);

var _teamspeak = require('./teamspeak');

var _teamspeak2 = _interopRequireDefault(_teamspeak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = JSON.parse(_fs2.default.readFileSync('services.json'));

function checkServices() {
  var start = Date.now();
  (0, _teamspeak2.default)(start, services.teamspeak.url, services.teamspeak.port);

  for (var i = 0, len = services.websites.length; i < len; i++) {
    (0, _checkSite2.default)(services.websites[i], start);
  }
}