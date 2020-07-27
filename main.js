const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');

const PLAYER =  '735176300335202345';
const DEAD =    '735176229899993202';


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('CoupBot is online!');
});

// Command Line: "node ." to start bot
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const parts = message.content.split(' ');

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (parts[0] == 'role'){
        if(parts[1] == 'ready'){
            message.member.addRole(PLAYER);
        }
    }


    else if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command == 'game'){
        client.commands.get('startGame').execute(message, args);
    }
    else if(command == 'test'){
        console.log(message.guild.roles);
        console.log("");
    }

});





// This login must be the last line 
client.login(token);
