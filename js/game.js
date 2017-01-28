

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create });

function preload () {

	game.load.image('logo', 'phaser.png');
}

function create () {

	var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
	logo.anchor.setTo(0.5, 0.5);

	// resizeGame();
}

function resizeGame(){
	var height = window.innerHeight;
	var width = window.innerWidth;
	 
	game.width = width;
	game.height = height;
	// game.stage.bounds.width = width;
	// game.stage.bounds.height = height;
	 
	if (game.renderType === 1) {
	    game.renderer.resize(width, height);
	    Phaser.Canvas.setSmoothingEnabled(game.context, false);
	}
}

window.onresize = function() {
	window.resizeGame();
}