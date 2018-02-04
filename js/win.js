const winState = {

    create: function() {


        let currentScore = (this.game.time.totalElapsedSeconds()).toFixed(2);
        let highScore = window.localStorage.getItem('highscore');

        currentScore = parseFloat(currentScore);
        highScore = parseFloat(highScore);

        highScore > currentScore ?
            window.localStorage.setItem( 'highscore', currentScore) :
            false;

        highScore = window.localStorage.getItem('highscore');

        const winLabel = game.add.text(30, 80, 'YOU WON! time: ' + currentScore,
                                        { font: '30px Arial', fill: '#00FF00' });
        const highLabel = game.add.text(30, 150, 'Highscore: ' + highScore,
            { font: '30px Arial', fill: '#00FF00' });
        const startLabel = game.add.text(30, game.world.height-80, 'Press the "W" key to restart',
                                        { font: '20px Arial', fill: '#00FF00' });
        let wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.restart, this);
    },

    restart: function() {
        game.state.start('menu');
    },
};