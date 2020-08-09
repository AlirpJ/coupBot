// Joshua Prila, coupBot
module.exports = {
    name: 'coupStart',
    description: 'Starting the game',
    execute(message, args){

        message.channel.send("Game starting...");


        // Arrays for two things: (Just arrays of strings);
        // 1. Availiable cards, to check if ambassador swaps are allowed
        // 2. Each player
        var deck = {
            cards: ["Duke", "Duke", "Duke", "Assassin", "Assassin", "Assassin", "Ambassador", "Ambassador", "Ambassador",
            "Captain", "Captain", "Captain", "Captain", "Contessa", "Contessa", "Contessa"],
            getDeck_Card: function(index) {
                return "Cards:" + cards[index];
            },
            setDeck: function(card1, card2) {
                // Card 1 is what card to pick, card 2 is the card to replace with
                //if statement required
            }
        };

        // Maintenance/glitch check purposes
        var deadDeck = {
            cards: ["null"],
            getDeck_Card: function(index) {
                return "Cards:" + cards[index];
            },
            addtoDeadDeck: function(card_died) {
                Array.push(card_died);
            }
        };


        //MAKE SURE CARDS ARE ALPHABETICAL ORDER CHECKED EVERY ROUND?
        var playerOne = {
            cards: ["null, null"],
            getP1: function() {
                return "Player 1's Cards:" + cards[0] + ", " + cards[1];
            },
            setP1: function(card1, card2) {
                cards[0] = card1;
                cards[1] = card2;
            }
        };
        var playerTwo = {
            cards: ["null, null"],
            getP1: function() {
                return "Player 2's Cards:" + cards[0] + ", " + cards[1];
            },
            setP1: function(card1, card2) {
                cards[0] = card1;
                cards[1] = card2;
            }
        };
        var playerThree = {
            cards: ["null, null"],
            getP1: function() {
                return "Player 3's Cards:" + cards[0] + ", " + cards[1];
            },
            setP1: function(card1, card2) {
                cards[0] = card1;
                cards[1] = card2;
            }
        };
        var playerFour = {
            cards: ["null, null"],
            getP1: function() {
                return "Player 4's Cards:" + cards[0] + ", " + cards[1];
            },
            setP1: function(card1, card2) {
                cards[0] = card1;
                cards[1] = card2;
            }
        };





        // end the game here:
        coupBegin = false;
        playerCount = 0;
    }
}