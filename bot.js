const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!234');
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', member => {
});

// Mudança de Presença/Status
client.on('presenceUpdate', (oldMember, newMember) => {
    n = newMember;
    g = newMember.presence.game.name;
    r = "";
    JogoCheck(n,g,'Drox Operative','718659248132718694');
    JogoCheck(n,g,'Drox Operative 2','718659248132718694');
    JogoCheck(n,g,'Factorio','671361855574245377');
    if ( r != "" )
        n.addRole(r);
});

function JogoCheck(membroatual,jogoatual,nomejogo,rolejogo) {
    if ( jogoatual === nomejogo )
        r = rolejogo;
    membroatual.removeRole(rolejogo);
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
