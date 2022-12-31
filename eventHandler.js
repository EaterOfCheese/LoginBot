module.exports.register = async (client, eventName) => {
    eval(`${eventName}(client);`);
}

function guildMemberAdd(client)
{
    client.on('guildMemberAdd', member => {
        let eventFile = require(`./commands/guildMemberAdd.js`);
        eventFile.run(client, member);
    });
    console.log("Event guildMemberAdd Registriert");
}

function guildMemberRemove(client)
{
    client.on('guildMemberRemove', member => {
        let eventFile = require(`./commands/guildMemberRemove.js`);
        eventFile.run(client, member);
    });
    console.log("Event guildMemberRemove Registriert");
}