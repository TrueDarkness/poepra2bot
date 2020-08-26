const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!234567');
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
    JogoCheck(n,g,"718659248132718694","Drox Operative","Drox Operative 2","","",""); ' Agente Drox
    JogoCheck(n,g,"722591169670021200","Nine Parchments","","","",""); ' Aprendiz de Feitiçaria
    JogoCheck(n,g,"671360952070832150","Relic Hunters Legend","","","",""); ' Caçador de Relíquias
    JogoCheck(n,g,"671361479349370890","Warframe","","","",""); ' Tenno
    JogoCheck(n,g,"670075744252198962","The Division","The Division 2","","",""); ' Agente da Divisão
    JogoCheck(n,g,"671361855574245377","Factorio","","","",""); ' Engenheiro da Automação
    JogoCheck(n,g,"671362792242282516","Satisfactory","","","",""); ' Pioneiro
    JogoCheck(n,g,"671372183938793504","Destiny","Destiny 2","","",""); ' Guardião
    JogoCheck(n,g,"671361756354052107","Monster Hunter World","","","",""); ' Caçador de Monstros
    JogoCheck(n,g,"671890580690960429","Wolcen","","","",""); ' Ascendido
    JogoCheck(n,g,"705922926087503883","Diablo","Diablo 2","Diablo 3","Diablo 4",""); ' Nefalem
    JogoCheck(n,g,"671361568553828352","World of Warcraft","","","",""); ' Cidadão de Azeroth
    JogoCheck(n,g,"671363254945054720","Borderlands","Borderlands 2","Borderlands 3","Borderlands Pre-Sequel",""); ' Caça-Arcas
    JogoCheck(n,g,"671364657520574495","Hammerwatch","Heroes of Hammerwatch","Hammerwatch 2","",""); ' Herói de Hammerwatch
});

function JogoCheck(membroatual,jogoatual,rolejogo,nomejogo1,nomejogo2,nomejogo3,nomejogo4,nomejogo5) {
    if ( jogoatual === nomejogo1 || jogoatual === nomejogo2 || jogoatual === nomejogo3 || jogoatual === nomejogo4 || jogoatual === nomejogo5 )
        membroatual.addRole(rolejogo);
    else
        membroatual.removeRole(rolejogo);
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
