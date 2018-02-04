const loadState = {
    preload: function() {

    const loadingLabel = game.add.text(80, 150, 'loading...',
        { font: '30 px Courier', fill: '#ffffff' });

    game.load.image('player', './assets/player.png');
    game.load.image('win', './assets/win.png');

    },

    create: function() {
        game.state.start('menu');
    }
};