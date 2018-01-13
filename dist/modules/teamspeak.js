'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (start, url, port) {

    var ts3 = new _teamspeak.Client(url, port);

    ts3.on('error', function (error) {
        return console.log(error);
    });

    ts3.authenticate('username', 'password').then(function () {
        return ts3.send('use', '1');
    }) //Use virtual server with ID=1
    .then(console.log('Teamspeak: %s ms', Date.now() - start)).then(function () {
        return ts3.send('quit');
    }).catch(function (error) {
        return console.log('Teamspeak Offline');
    });
};

var _teamspeak = require('teamspeak');