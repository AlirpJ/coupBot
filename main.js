// Joshua Prila, coupBot
const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const { start } = require('repl');

const PLAYER =  '735176300335202345';
const DEAD =    '735176229899993202';
let parts = new Array ();
var coupBegin = false;
var playerCount = 0;
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
    parts = message.content.split(' ');

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (parts[0] == 'role'){
        if(parts[1] == 'ready'){
            message.member.addRole(PLAYER);
            message.reply(' you are readied up!');
            playerCount++;
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
        message.channel.send("Information has been sent to console!");
    }




});


// Start after hitting a certain number of players
//may change later to have someone input command to start (original game uses anywhere from 2-6 players)
if(playerCount === 4 && coupBegin == true){
    client.commands.get('coupStart').execute(message, args);
}



// This login must be the last line 
// Token for discord bot. DO NOT SHARE
client.login('token');
