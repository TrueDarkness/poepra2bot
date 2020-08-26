const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!2345');
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', member => {
});

// Mudança de Presença/Status
client.on('presenceUpdate', (oldMember, newMember) => {
    n = newMember;
    g = newMember.presence.game.name;
    JogoCheck(n,g,'718659248132718694','Drox Operative','Drox Operative2','','','');
    JogoCheck(n,g,'671361855574245377','Factorio','','','','');
    JogoCheck(n,g,'722591169670021200','Nine Parchments','','','','');
});

function JogoCheck(membroatual,jogoatual,rolejogo,nomejogo1,nomejogo2,nomejogo3,nomejogo4,nomejogo5) {
    if ( jogoatual === nomejogo1 || jogoatual === nomejogo2 || jogoatual === nomejogo3 || jogoatual === nomejogo4 || jogoatual === nomejogo5 )
        membroatual.addRole(rolejogo);
    else
        membroatual.removeRole(rolejogo);
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
