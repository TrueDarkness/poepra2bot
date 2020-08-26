const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!x');
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', member => {
});

// Mudança de Presença/Status
client.on('presenceUpdate', (oldMember, newMember) => {
    n = newMember;
    g = "semjogo";
    if ( newMember.presence && newMember.presence.game )
        g = newMember.presence.game.name;
    JogoCheck(n,g,"718659248132718694","Drox Operative","Drox Operative 2","","",""); // Agente Drox
    JogoCheck(n,g,"722591169670021200","Nine Parchments","","","",""); // Aprendiz de Feitiçaria
    JogoCheck(n,g,"671360952070832150","Relic Hunters Legend","","","",""); // Caçador de Relíquias
});

function JogoCheck(membroatual,jogoatual,rolejogo,nomejogo1,nomejogo2,nomejogo3,nomejogo4,nomejogo5) {
    if ( jogoatual === nomejogo1 || jogoatual === nomejogo2 || jogoatual === nomejogo3 || jogoatual === nomejogo4 || jogoatual === nomejogo5 )
        membroatual.addRole(rolejogo);
    else
        membroatual.removeRole(rolejogo);
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
