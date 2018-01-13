import fs from 'fs';
import checkSite from './checkSite.js';
import teamspeak from './teamspeak';

const services = JSON.parse(fs.readFileSync('services.json'));

export default function checkServices() {
  const start = Date.now();
  teamspeak(start, services.teamspeak.url, services.teamspeak.port);

  for (var i = 0, len = services.websites.length; i < len; i++) {
    checkSite(services.websites[i], start);  
  }
}