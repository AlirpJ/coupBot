// Joshua Prila, coupBot
module.exports = {
    name: 'ping',
    description: 'This is the ping command. Used for testing purposes.',
    execute(message, args){

        message.channel.send('pong!');
    }
}
