const { Client, Collection, MessageEmbed, MessageAttachment } = require('discord.js');
const fs = require("fs");
const Canvas = require('canvas');

const fetch = require("node-fetch");

module.exports.run = async (client, member) => {
    console.log('Member Joined');
    let channel = client.channels.cache.get('776942211798532106');

    let { user } = member;

    var name = user.tag;

    let embed = new MessageEmbed()
    .setTitle('Welcome')
    .setDescription('Have a nice time, ' + name)
    channel.send(embed);

}