const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong!!!');
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', (member) => {
    member.addRole("670252571591573504"); // Online
});

// Mudança de Status/Nome
client.on("guildMemberUpdate", function(oldMember, newMember) {
    if ( newMember.user.bot )
        return;
    g = "semjogo";
    if ( newMember.presence && newMember.presence.game )
        g = newMember.presence.game.name;
    StatusCheck(newMember,g);
});

// Mudança de Presença/Status
client.on('presenceUpdate', (oldMember, newMember) => {
    if ( newMember.user.bot || newMember.presence.clientStatus === 'mobile' || oldMember.presence.status !== newMember.presence.status )
        return;
    g = "semjogo";
    if ( newMember.presence && newMember.presence.game )
        g = newMember.presence.game.name;
    StatusCheck(newMember,g);
});

function StatusCheck(n,g) {
    if ( g !== "semjogo" )
        n.addRole("748298260002898020");
    else
        n.removeRole("748298260002898020");
    //client.channels.cache.get('743855267409821698').send('Hello here!')
    JogoCheck(n,g,"718659248132718694","Drox Operative","Drox Operative 2","","",""); // Agente Drox
    JogoCheck(n,g,"722591169670021200","Nine Parchments","","","",""); // Aprendiz de Feitiçaria
    JogoCheck(n,g,"671360952070832150","Relic Hunters Legend","","","",""); // Caçador de Relíquias
    JogoCheck(n,g,"748228857789808833","Remnant: From the Ashes","","","",""); // Herói
    JogoCheck(n,g,"748231155953696809","Barony","","","",""); // Aventureiro
    JogoCheck(n,g,"748231857073815582","20XX","30XX","","",""); // Contratado
    JogoCheck(n,g,"748229708218499243","Torchlight","Torchlight II","Torchlight III","",""); // Aventureiro
    JogoCheck(n,g,"748230116756422798","Killing Floor","Killing Floor 2","","",""); // Sobrevivente
    JogoCheck(n,g,"671361479349370890","Warframe","","","",""); // Tenno
    JogoCheck(n,g,"670075744252198962","Tom Clancy's The Division","Tom Clancy's The Division 2","","",""); // Agente da Divisão
    JogoCheck(n,g,"671361855574245377","Factorio","","","",""); // Engenheiro da Automação
    JogoCheck(n,g,"671362792242282516","Satisfactory","","","",""); // Pioneiro
    JogoCheck(n,g,"671372183938793504","Destiny","Destiny 2","","",""); // Guardião
    JogoCheck(n,g,"671361756354052107","Monster Hunter World","","","",""); // Caçador de Monstros
    JogoCheck(n,g,"671890580690960429","Wolcen","","","",""); // Ascendido
    JogoCheck(n,g,"705922926087503883","Diablo","Diablo 2","Diablo 3","Diablo 4",""); // Nefalem
    JogoCheck(n,g,"671361568553828352","World of Warcraft","","","",""); // Cidadão de Azeroth
    JogoCheck(n,g,"671363254945054720","Borderlands","Borderlands 2","Borderlands 3","Borderlands Pre-Sequel",""); // Caça-Arcas
    JogoCheck(n,g,"671364657520574495","Hammerwatch","Heroes of Hammerwatch","Hammerwatch 2","",""); // Herói de Hammerwatch
    JogoCheck(n,g,"671372582943195156","Payday","Payday 2","Payday 3","",""); // Ladrão de Banco
    JogoCheck(n,g,"671478349016858625","Don't Starve","Don't Starve Together","","",""); // Sobrevivente Faminto
    JogoCheck(n,g,"700421649190879272","Streets of Rage 4","","","",""); // Lutador de Rua
    JogoCheck(n,g,"671478709051719710","Freelancer","","","",""); // Freelancer
    JogoCheck(n,g,"671479313308188693","Overcooked","Overcooked 2","","",""); // Chef de Cozinha
    JogoCheck(n,g,"671480101787140106","Out of Space","","","",""); // Faxineiro Espacial
    JogoCheck(n,g,"671481433377996826","Stardew Valley","","","",""); // Fazendeiro
    JogoCheck(n,g,"671481632296927245","Eurotruck Simulator","","","",""); // Caminhoneiro
    JogoCheck(n,g,"671481819627126784","Path of Exile","Path of Exile 2","","",""); // Exilado
    JogoCheck(n,g,"721504174352629832","Dark Souls","Dark Souls Remastered","Dark Souls 2","Dark Souls 3",""); // Senhor das Cinzas
    JogoCheck(n,g,"671481817982959637","Human Fall Flat","","","",""); // Herói Cambaleante
    JogoCheck(n,g,"671890582313893944","Warhammer 40,000: Inquisitor - Martyr","Warhammer 40,000: Inquisitor - Prophecy","","",""); // Insquisidor
    JogoCheck(n,g,"672511452069888014","Grand Theft Auto V","","","",""); // Ladrão de Carro
    JogoCheck(n,g,"683821650516770820","Tibia","","","",""); // Tibiano
    JogoCheck(n,g,"699354042345717911","League of Legends","","","",""); // Invocador
    JogoCheck(n,g,"720052612149280951","Rainbow Six Siege","","","",""); // Operador
}

function JogoCheck(membroatual,jogoatual,rolejogo,nomejogo1,nomejogo2,nomejogo3,nomejogo4,nomejogo5) {
    if ( jogoatual === nomejogo1 || jogoatual === nomejogo2 || jogoatual === nomejogo3 || jogoatual === nomejogo4 || jogoatual === nomejogo5 )
        membroatual.addRole(rolejogo);
    else
        membroatual.removeRole(rolejogo);
}

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
