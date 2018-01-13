import { Client } from 'teamspeak';

export default function(start, url, port) {

  let ts3 = new Client(url, port);

  ts3.on('error', error => console.log(error));

  ts3.authenticate('username', 'password')
      .then(() => ts3.send('use', '1')) //Use virtual server with ID=1
      .then(console.log('Teamspeak: %s ms', Date.now() - start))
      .then(() => ts3.send('quit'))
      .catch(error => console.log('Teamspeak Offline'));
}
