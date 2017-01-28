var game = new Phaser.Game(800, 500, Phaser.AUTO, '', { preload: preload, create: create });

function preload () {

	game.load.text('dictionary', 'static/coa.txt');
	game.load.image('logo', 'phaser.png');

}

function create () {

	var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
	logo.anchor.setTo(0.5, 0.5);

	console.log(game.dictionary)

}
