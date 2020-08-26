const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', async client => {
    setInterval(await statuscheck(client), 10000); // Checar usuários a cada 10 segundos
});

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!');
       message.reply(message.user.presence.game);
       
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', member => {
});

// Checar usuários
async function statuscheck() {
    const statusArray = {};
    await client.guilds.array().forEach(async g => {
        const status = [];
        await g.members.array().forEach(m => {
            if (m.user.presence.game === "Factorio")
                member.addRole('671361855574245377');
            else
                member.removeRole('671361855574245377');
        });
        statusArray[g.id] = status;
    });
    console.log('set'); // /So I know the timer works
    return statusArray;
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
