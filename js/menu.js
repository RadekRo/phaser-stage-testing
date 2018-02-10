const menuState = {

    create: function() {

    const nameLabel = game.add.text(30, 80, 'Phaser Stage Testing Game',
                                    { font: '30px Arial', fill: '#ffffff' });
    // const startLabel = game.add.text(30, game.world.height-80, 'press the "W" key to start',
     //                               { font: '25px Arial', fill: '#ffffff' });
    // let wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    const buttonStart = game.add.button(game.world.centerX - 95, 400, 'buttonStart', this.start, this, 2, 1, 0);

    // wkey.onDown.addOnce(this.start, this);
    },

    start: function() {
        game.state.start('play');
    },
};