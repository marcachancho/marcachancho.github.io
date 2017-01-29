var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create });

function preload () {
	game.load.json('dictionary', 'static/coa.json');
}


function create () {
	game.stage.backgroundColor = '#D9D9D9'
	
	var dictionary = shuffle(game.cache.getJSON('dictionary'));
	console.log(dictionary.slice(0,5));

}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function render() {

	var textGroup = game.add.group();

	for (var i = 0; i < 300; i++) {
		textGroup.add(game.make.text(32, i * 20, text[i]))
		console.log(text[i])
	}

}

function resizeGame() {
	var height = window.innerHeight;
	var width = window.innerWidth;

	game.width = width;
	game.height = height;

	if (game.renderType === 1) {
		game.renderer.resize(width, height);
		Phaser.Canvas.setSmoothingEnabled(game.context, false);
	}
}

window.onresize = function() {
	window.resizeGame();
}
