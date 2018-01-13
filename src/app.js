import rp from 'request-promise';
import fs from 'fs';
import teamspeak from './modules/teamspeak';

const start = Date.now();

teamspeak(start);

var forum = rp('https://dev.zauartcc.org/forum');
var mainSite = rp('https://www.zauartcc.org/');
var admin = rp('https://www.zauartcc.org/admin');
var setmore = rp('https://zauartcc.setmore.com');
var slack = rp('https://zauartcc.slack.com');
var moodle = rp('https://training.dev.zauartcc.org');

forum.then(() => {
  console.log('Forum: %s ms', Date.now() - start);
}).catch(() => {
  console.log('Forum: Offline');
});

mainSite.then(() => {
  console.log('Main Site: %s ms', Date.now() - start);
}).catch(() => {
  console.log('Main Site: Offline');
});

admin.then(() => {
  console.log('Admin: %s ms', Date.now() - start);
}).catch(() => {
  console.log('Admin: Offline');
});

setmore.then(() => {
  console.log('Setmore: %s ms', Date.now() - start);
}).catch(() => {
  console.log('Setmore: Offline');
})

slack.then(() => {
  console.log('Slack: %s ms', Date.now() - start);
}).catch(() => {
  console.log('Slack: Offline');
});

moodle.then(() => {
  console.log('Moodle: %s ms', Date.now() - start);
}).catch(() => {
  console.log('Moodle: Offline');
});
