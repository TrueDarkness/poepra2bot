const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async client => {
    setInterval(await statuscheck(client), 10000); // Checar usuários a cada 10 segundos
});

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!23');
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', member => {
});

client.on('presenceUpdate', (oldMember, newMember) => {
    if ( newMember.presence.game.name === "Factorio" )
        newMember.addRole('671361855574245377');
    else
        newMember.removeRole('671361855574245377');
});

// Checar usuários
async function statuscheck() {
    const statusArray = {};
    await client.guilds.array().forEach(async g => {
        const status = [];
        await g.members.array().forEach(m => {
            if (m.user.presence.game.name === "Factorio")
                
                m.addRole('671361855574245377');
            else
                m.addRole('671361855574245377');
                m.removeRole('671361855574245377');
        });
        statusArray[g.id] = status;
    });
    console.log('set'); // /So I know the timer works
    return statusArray;
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
