// Joshua Prila, coupBot
const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const { start } = require('repl');

const PLAYER        = '735176300335202345';
const DEAD          = '735176229899993202';
const playerOne     = '743496733711007857';
const playerTwo     = '743496738752430220';
const playerThree   = '743496740635672626';
const playerFour    = '743496742061736036';



let parts = new Array ();
var coupBegin = false;

var playerCount = {
    getPlayers: function() {
        return players;
    },
    setPlayers: function(x){
        players = x;
    }
}
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('CoupBot is online!');
});

// Command Line: "node ." to start bot (after set to correct directory via "cd")
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    //parts is currently unused, can delete?
    parts = message.content.split(' ');

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command == 'readyup'){
        message.member.addRole(PLAYER);

        if(getPlayers == 0){
            message.member.addRole(playerOne);
        }
        if(getPlayers == 1){
            message.member.addRole(playerTwo);
        }
        if(getPlayers == 2){
            message.member.addRole(playerThree);
        }
        if(getPlayers == 3){
            message.member.addRole(playerFour);
        }
        else{
            message.channel.send("Sorry. Maximum players reached! Do '-reset' to try again.")
        }
        client.commands.get('readyUp').execute(message, args);
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
    else if(command == 'reset'){
        setPlayers(0);
        startFalse();
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
