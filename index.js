const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

const fs = require("fs");

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `Writing Brand New Coding!`,
      type: 'PLAYING'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    if (!fs.existsSync(`./Commands/${command}`)) return;
    require(`./Commands/${command}`)(message, args);
  }
});

require('./server')();
bot.login(config.token);
