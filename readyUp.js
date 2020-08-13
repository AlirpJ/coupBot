// Joshua Prila, coupBot
module.exports = {
    name: 'readyUp',
    description: 'Ready up function. Adds players to the correct role',
    execute(message, args){
        if(getStart() == true){
        
        
        setPlayers(getPlayers()+1);

        message.channel.send("Another player has readied up!");
        }
        }
}