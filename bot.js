const Discord = require('discord.js');
const client = new Discord.Client();
 
forbidenGames = ["Custom Status", "Spotify", "Twitch", "Guilded", "Cyberpunk 2077", "Google Chrome", "Mir4G[1]", "Visual Studio Code"];
forbidenWords = ["twitch.tv", "discord.com", "discord.gg", "@PS Updates", "@Switch Updates", "@XB Updates","@everyone"];
bannedGames = ["Mir4"];
 
client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong!');
        message.delete(1);
        //message.reply(message.guild.members.find('id',287675149031833601).presence.game.name);
    }
    if (message.content.includes("!spam") && message.author.id === "88252571155693568") {
        message.delete(1);
        Spam();
    }
    if (message.content.includes("!pp2") && message.author.id === "88252571155693568") {
        message.channel.send(message.content.replace("!pp2",""));
        message.delete(1);
    }
    if (message.content.includes("!test") && message.author.id === "88252571155693568") {
		tmpmsg = message.content.replace("!test","");
		tmpcheck = tmpmsg.includes("Mir4")
        message.channel.send(tmpcheck);
        message.delete(1);
    }
    for (var i = 0; i < forbidenWords.length; i++) {
        if (message.content.includes(forbidenWords[i]) && message.author.id !== "740204208006889503") {
            client.channels.get("743855267409821698").send("**Exclusão: **" + message.author.username + " *(" + message.author.id +")*: " + message.content);
            message.delete(1);
            break;
        }
    }
});

/*
client.on('messageUpdate', (oldMessage, newMessage) => {
    for (var i = 0; i < forbidenWords.length; i++) {
        if (newMessage.content.includes(forbidenWords[i]) && newMessage.author.id !== "740204208006889503") {
            client.channels.get("743855267409821698").send("**Exclusão: **" + newMessage.author.username + " *(" + newMessage.author.id +")*: " + newMessage.content);
            newMessage.delete(1);
            break;
        }
    }
}
*/

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
//  newMember.addRole("670252571591573504"); // Online 
    s = 1;
    o = "semjogo";
    g = "semjogo";
    if ( oldMember.presence && oldMember.presence.game ) {
        o = oldMember.presence.game.name;
        for (var i = 0; i < forbidenGames.length; i++) {
            if ( o == forbidenGames[i] ) {
                o = "semjogo";
                break;
            }
        }
        for (var i = 0; i < bannedGames.length; i++) {
            if ( o.includes(bannedGames[i]) ) {
                o = "banjogo";
                break;
            }
        }
    }
    if ( newMember.presence && newMember.presence.game ) {
        g = newMember.presence.game.name;
//        if ( g == "Twitch" )//|| newMember.presence.game.streaming || newMember.presence.game.type == 1 )
//            s = 2;
        for (var i = 0; i < forbidenGames.length; i++) {
            if ( g == forbidenGames[i] ) {
                g = "semjogo";
                break;
            }
        }
        for (var i = 0; i < bannedGames.length; i++) {
            if ( g.includes(bannedGames[i]) ) {
                g = "banjogo";
                break;
            }
        }
    }
    if ( o != g ) //|| s == 2 )
        StatusCheck(newMember,g,s);
    if ( o != g && g != "semjogo" ) {
//        client.channels.get("743855267409821698").send("**" + newMember.user.username + "** começou a jogar **" + g + "**");
        //client.channels.get("743855267409821698").send(newMember.user.toString() + " começou a jogar " + g,{"allowedMentions": { "users" : []}})
    }
});

function StatusCheck(n,g,s) {
	// Playing
	if ( g !== "semjogo" && g !== "banjogo" )
		n.addRole("748298260002898020");
	else
		n.removeRole("748298260002898020");
	// Stream
	if ( s == 2 )
		n.addRole("770811294008737803");
	else
		n.removeRole("770811294008737803");
	// Hide / -Online
	if ( g == "banjogo" ) {
		n.addRole("770811294008737803");
		n.removeRole("670252571591573504");
    }
	else {
		n.removeRole("770811294008737803");
		n.addRole("670252571591573504");
	}
 /*
    JogoCheck(n,g,"671361479349370890","Warframe","","","",""); // Tenno
   */
}

function JogoCheck(membroatual,jogoatual,rolejogo,nomejogo1,nomejogo2,nomejogo3,nomejogo4,nomejogo5) {
    if ( jogoatual.toLowerCase() === nomejogo1.toLowerCase() || jogoatual.toLowerCase() === nomejogo2.toLowerCase() || jogoatual.toLowerCase() === nomejogo3.toLowerCase() || jogoatual.toLowerCase() === nomejogo4.toLowerCase() || jogoatual.toLowerCase() === nomejogo5.toLowerCase() )
        membroatual.addRole(rolejogo);
    else
        membroatual.removeRole(rolejogo);
}

function Spam() {
	client.channels.get("743855267409821698").send("oi");
	/*
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBZEJ2dYHtnsn4DJLq6QzXJo4umiHlam5M&cx=017268685753925817424:6rgr_rfrawg&q=dog&searchType=image&fileType=jpg&imgSize=xlarge&alt=json', true);
	xhr.addEventListener("load", function() {
		let msg = xhr.response;
		if (!msg)
			msg = '';
		client.channels.get("743855267409821698").send(msg);
	});
	xhr.send();
	*/
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
