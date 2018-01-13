'use strict';

var _checkServices = require('./modules/checkServices.js');

var _checkServices2 = _interopRequireDefault(_checkServices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runChecker() {

    (0, _checkServices2.default)();

    setTimeout(runChecker, process.env.INTERVAL);
}

runChecker();