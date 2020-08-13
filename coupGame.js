// Joshua Prila, coupBot
module.exports = {
    name: 'coupGame',
    description: 'Running command for the game of coup',
    execute(message, args){

        if(coupBegin == true){

        
        message.channel.send("Let's play! Sending players their cards now...");
        }
    }
}