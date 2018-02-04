const menuState = {

    create: function() {

    const nameLabel = game.add.text(30, 80, 'Phaser Stage Testing Game',
                                    { font: '30px Arial', fill: '#ffffff' });
    const startLabel = game.add.text(30, game.world.height-80, 'press the "W" key to start',
                                    { font: '25px Arial', fill: '#ffffff' });
    let wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.start, this);
    },

    start: function() {
        game.state.start('play');
    },
};