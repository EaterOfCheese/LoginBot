const config = require('./config.js');

const {Client} = require('discord.js');
const client = new Client();

const utils = require('./utils.js');

let prefix = config.prefix;

client.on('ready', () => {
    utils.ready(client);
    utils.registerEvents(client);
});

client.on("message", message => {
    utils.onMessage(client, message, prefix);
})

client.login(config.token);