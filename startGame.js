// Joshua Prila, coupBot
// Sets start to true
module.exports = {
    name: 'startGame',
    description: 'Player wants to start!',
    execute(message, args){
        setPlayers(0);
        message.reply('wants to start a game!');
        var start = {
            getStart: function() {
                return start;
            },
            setStart: function(x) {
                start = x;
            }
        }
    }
}
