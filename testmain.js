const Discord = require('discord.js');

const client = new Discord.Client();

// C:\Users\Thund\OneDrive\Desktop\DiscordBot
// prefix is used before bot commands

token = "" // PUT DISCORD TOKEN HERE


const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('testBot is online!');
});

// Command Line: "node ." to start bot
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'owo'){
        message.channel.send("whats dis :3");
    }
    else if(command == 'uwu'){
        message.channel.send("hmm");
    }
    else if(command == 'xd'){
        message.channel.send("xd");
    }
});



client.login(token);