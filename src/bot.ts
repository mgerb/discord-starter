import * as Discord from 'discord.js';
import * as fs from 'fs';

// read config file
const file = fs.readFileSync('./config.json');

// parse config file into object
const config = JSON.parse(file.toString());

// create new client
const client = new Discord.Client();

const readyHandler = () => {
  console.log('Bot is ready!');
};

const pingHandler = (message: Discord.Message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
};

// add event handlers
client.on('ready', readyHandler);
client.on('message', pingHandler);

// start bot
client.login(config.token);
