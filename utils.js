const fs = require("fs");
const eventHandler = require('./eventHandler.js');

module.exports.ready = async (client) => {
    console.log("--------------------");
    console.log("Name: " + client.user.username);
    console.log("ID: " + client.user.id)
    console.log("--------------------");
    client.user.setActivity("Team INSTINCT BETA", {"type": "STREAMING", "url": "https://twitch.tv/hanyaku"});
}

module.exports.onMessage = async (client, message, prefix) => {
    let raw = message.content.slice(prefix.length).split(" ");
    let cmd = raw[0];
    let rawArgs = raw.join(" ");
    let args = rawArgs.slice(cmd.length).split(" ");

    if(message.content.startsWith(prefix))
    {
        fs.exists(`./commands/${cmd}.js`,function(exists){
            let cmdFile = require(`./commands/${cmd}.js`);
            cmdFile.run(client, message, args);
        });
    }
}

module.exports.registerEvents = async (client) => {
    eventHandler.register(client,'guildMemberAdd');
    eventHandler.register(client,'guildMemberRemove');
}