const Discord = require('discord.js');
const client = new Discord.Client();

forbidenWords = ["twitch.tv", "discord.com", "discord.gg"]

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pongY');
        //message.reply(message.guild.members.find('id',287675149031833601).presence.game.name);
    }
    if (message.content.includes("!pp2") && message.author.id === "88252571155693568") {
        message.channel.send(message.content.replace("!pp2",""));
        message.delete(1);
    }
    for (var i = 0; i < forbidenWords.length; i++) {
        if (message.content.includes(forbidenWords[i])) {
            message.delete(1)
            break;
        }
    }
});

// https://stackoverflow.com/questions/49619688/reaction-emoji-name-returns-a-unicode-string-how-to-check-if-something-matches
client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === "669514927115075585") {
        if ( user.id === "88252571155693568" ) {
//            client.channels.get("743855267409821698").send("user ok");
//            client.channels.get("743855267409821698").send(reaction.emoji.name);
//            bot.add_reaction(reaction.message, reaction);
        }
        if ( reaction.emoji.name === "🎉" )
            reaction.message.guild.members.find('id', user.id).addRole("669517394301157376");
        if ( reaction.emoji.name === "📰" )
            reaction.message.guild.members.find('id', user.id).addRole("669517423082340372");
        if ( reaction.emoji.name === "🎥" )
            reaction.message.guild.members.find('id', user.id).addRole("669532352736657418");
    }
});

client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === "669514927115075585") {
        if ( reaction.emoji.name === "🎉" )
            reaction.message.guild.members.find('id', user.id).removeRole("669517394301157376");
        if ( reaction.emoji.name === "📰" )
            reaction.message.guild.members.find('id', user.id).removeRole("669517423082340372");
        if ( reaction.emoji.name === "🎥" )
            reaction.message.guild.members.find('id', user.id).removeRole("669532352736657418");
    }
});

// Novos usuários, adicionar cargo "Online"
client.on('guildMemberAdd', (member) => {
    member.addRole("670252571591573504"); // Online
});

// Mudança de Presença/Status
client.on('presenceUpdate', (oldMember, newMember) => {
    if ( newMember.user.bot )
        return;
    s = 1;
    o = "semjogo";
    g = "semjogo";
    if ( oldMember.presence && oldMember.presence.game ) {
        o = oldMember.presence.game.name;
        if ( o == "Custom Status" || o == "Spotify" || o == "Twitch" )
            o = "semjogo";
    }
    if ( newMember.presence && newMember.presence.game ) {
        g = newMember.presence.game.name;
        if ( g == "Twitch" || newMember.presence.game.streaming || newMember.presence.game.type == 1 )
            s = 2;
        if ( g == "Custom Status" || g == "Spotify" || g == "Twitch" )
            g = "semjogo";
    }
    if ( o != g ) {
        StatusCheck(newMember,g,s);
        if ( g != "semjogo" ) {
            //client.channels.get("773764984923750453").send(newMember.user.username + " começou a jogar " + g);
            //client.channels.get("773764984923750453").send(newMember.user.toString() + " começou a jogar " + g,{"allowedMentions": { "users" : []}})
            const jogandoembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
            client.channels.get("773764984923750453").send(jogandoembed);
        }
    }
});

function StatusCheck(n,g,s) {
    if ( g !== "semjogo" )
        n.addRole("748298260002898020");
    else
        n.removeRole("748298260002898020");
    if ( s == 2 )
        n.addRole("770811294008737803");
    else
        n.removeRole("770811294008737803");
    JogoCheck(n,g,"671360952070832150","Relic Hunters Legend","","","",""); // Caçador de Relíquias
    JogoCheck(n,g,"718659248132718694","Drox Operative","Drox Operative 2","","",""); // Agente Drox
    JogoCheck(n,g,"722591169670021200","Nine Parchments","","","",""); // Aprendiz de Feitiçaria
    JogoCheck(n,g,"764343943026049074","9 Monkeys of Shaolin","","","",""); // Monge Shaolin
    JogoCheck(n,g,"759953322420469800","Blightbound","","","",""); // Herói
    JogoCheck(n,g,"759953330138513418","Darksburg","","","",""); // Sobrevivente
    JogoCheck(n,g,"748228857789808833","Remnant","Remnant: From the Ashes","REMNANT","",""); // Herói
    JogoCheck(n,g,"748231155953696809","Barony","","","",""); // Aventureiro
    JogoCheck(n,g,"748231857073815582","20XX","30XX","","",""); // Contratado
    JogoCheck(n,g,"748229708218499243","Torchlight","Torchlight II","Torchlight III","",""); // Aventureiro
    JogoCheck(n,g,"748230116756422798","Killing Floor","Killing Floor 2","","",""); // Sobrevivente
    JogoCheck(n,g,"671361479349370890","Warframe","","","",""); // Tenno
    JogoCheck(n,g,"772971176459894804","State of Decay","State of Decay 2","","",""); // Sobrevivente
    JogoCheck(n,g,"759789856288931850","Spelunky","Spelunky 2","","",""); // Espeleólogo
    JogoCheck(n,g,"764140689150967818","Robo Quest","Roboquest","","",""); // Guardião
    JogoCheck(n,g,"757783560634761347","Serious Sam 4","Serious Sam 3","Serious Sam 2","Serious Sam",""); // Serious Sam
    JogoCheck(n,g,"748659755915935899","Surgeon Simulator 2","Surgeon Simulator","","",""); // Cirurgião
    JogoCheck(n,g,"670075744252198962","Tom Clancy's The Division","Tom Clancy's The Division 2","","",""); // Agente da Divisão
    JogoCheck(n,g,"671361855574245377","Factorio","","","",""); // Engenheiro da Automação
    JogoCheck(n,g,"671362792242282516","Satisfactory","","","",""); // Pioneiro
    JogoCheck(n,g,"750396193137361027","Marvel's Avengers","","","",""); // Vingador
    JogoCheck(n,g,"671372183938793504","Destiny","Destiny 2","","",""); // Guardião
    JogoCheck(n,g,"671361756354052107","MONSTER HUNTER: WORLD","","","",""); // Caçador de Monstros
    JogoCheck(n,g,"671890580690960429","Wolcen","","","",""); // Ascendido
    JogoCheck(n,g,"705922926087503883","Diablo","Diablo 2","Diablo III","Diablo 4",""); // Nefalem
    JogoCheck(n,g,"671363254945054720","Borderlands","Borderlands 2","Borderlands 3","Borderlands Pre-Sequel",""); // Caça-Arcas
    JogoCheck(n,g,"671364657520574495","Hammerwatch","Heroes of Hammerwatch","Hammerwatch 2","",""); // Herói de Hammerwatch
    JogoCheck(n,g,"671372582943195156","PAYDAY","PAYDAY 2","PAYDAY 3","",""); // Ladrão de Banco
    JogoCheck(n,g,"671478349016858625","Don't Starve","Don't Starve Together","","",""); // Sobrevivente Faminto
    JogoCheck(n,g,"700421649190879272","Streets of Rage 4","","","",""); // Lutador de Rua
    JogoCheck(n,g,"671478709051719710","Freelancer","","","",""); // Freelancer
    JogoCheck(n,g,"671479313308188693","Overcooked","Overcooked 2","","",""); // Chef de Cozinha
    JogoCheck(n,g,"671480101787140106","Out of Space","","","",""); // Faxineiro Espacial
    JogoCheck(n,g,"671481433377996826","Stardew Valley","","","",""); // Fazendeiro
    JogoCheck(n,g,"671481632296927245","Eurotruck Simulator","","","",""); // Caminhoneiro
    JogoCheck(n,g,"671481819627126784","Path of Exile","Path of Exile 2","","",""); // Exilado
    JogoCheck(n,g,"721504174352629832","Dark Souls","DARK SOULS™: REMASTERED","DARK SOULS™ II","DARK SOULS™ II: Scholar of the First Sin","DARK SOULS™ III"); // Senhor das Cinzas
    JogoCheck(n,g,"671481817982959637","Human Fall Flat","","","",""); // Herói Cambaleante
    JogoCheck(n,g,"671890582313893944","Warhammer 40,000: Inquisitor - Martyr","Warhammer 40,000: Inquisitor - Prophecy","","",""); // Inquisidor
    JogoCheck(n,g,"672511452069888014","Grand Theft Auto V","Grand Theft Auto San Andreas","","",""); // Ladrão de Carro
    JogoCheck(n,g,"759904624088973313","Ghost Recon Breakpoint","Tom Clancy's Ghost Recon Wildlands","","",""); // Ghost
    JogoCheck(n,g,"773214210267938837","Elite Dangerous","","","",""); // Comandante
    JogoCheck(n,g,"761643224048599100","Genshin Impact","","","",""); // Viajante
    JogoCheck(n,g,"683821650516770820","Tibia","","","",""); // Tibiano
    JogoCheck(n,g,"761659133677666365","ROBLOX","","","",""); // Robloxiano
    JogoCheck(n,g,"759863565804634204","Among Us","","","",""); // Impostor
    JogoCheck(n,g,"773567396975869963","Fall Guys: Ultimate Knockout","","","",""); // Jujuba
    JogoCheck(n,g,"761664688459087872","League of Legends","","","",""); // Invocador
    JogoCheck(n,g,"761665162872225804","VALORANT","","","",""); // Agente
}

function JogoCheck(membroatual,jogoatual,rolejogo,nomejogo1,nomejogo2,nomejogo3,nomejogo4,nomejogo5) {
    if ( jogoatual === nomejogo1 || jogoatual === nomejogo2 || jogoatual === nomejogo3 || jogoatual === nomejogo4 || jogoatual === nomejogo5 )
        membroatual.addRole(rolejogo);
    else
        membroatual.removeRole(rolejogo);
}

client.on('raw', packet => {
    // We don't want this to run on unrelated packets
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    // Grab the channel to check the message from
    const channel = client.channels.get(packet.d.channel_id);
    // There's no need to emit if the message is cached, because the event will fire anyway for that
    if (channel.messages.has(packet.d.message_id)) return;
    // Since we have confirmed the message is not cached, let's fetch it
    channel.fetchMessage(packet.d.message_id).then(message => {
        // Emojis can have identifiers of name:id format, so we have to account for that case as well
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        // This gives us the reaction we need to emit the event properly, in top of the message object
        const reaction = message.reactions.get(emoji);
        // Adds the currently reacting user to the reaction's users collection.
        if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
        // Check which type of event it is before emitting
        if (packet.t === 'MESSAGE_REACTION_ADD') {
            client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
        }
    });
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
