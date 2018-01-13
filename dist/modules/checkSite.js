'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkSite;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkSite(site, start) {
  (0, _requestPromise2.default)(site.url).then(function () {
    console.log('%s: %s ms', site.name, Date.now() - start);
  }).catch(function () {
    console.log('%s: Offline', site.name);
  });
}