MarcaChancho.Game = function (name) {
	// body...
}

MarcaChancho.Game.prototype = {
	create: function () {

	},

	update: function () {

	},

	quitGame: function () {

		this.state.start('MainMenu');

	}
};

// var dictionary;
// var viewModel;

// var step = 0;

//  function preload () {
//  	game.load.json('dictionary', 'static/coa.json');
// }


//  function create () {
// 	game.stage.backgroundColor = '#000000';
	
// 	dictionary = loadDictionary();

// 	viewModel = new WordDefinitionViewModel(reset);

// 	var words = dictionary.slice(step, step + 4);

// 	words.forEach(function (word) {
// 		viewModel.addWord(word);
// 	})
	
// 	viewModel.render();
	
// }

// function update() {
	
// }

// function reset() {
// 	step = step + 5
// 	var words = dictionary.slice(step, step + 4);

// 	words.forEach(function (word) {
// 		viewModel.addWord(word);
// 	})
	
// 	viewModel.render();
// }

// function loadDictionary(){
// 	var dictionary = shuffle(game.cache.getJSON('dictionary'));
	
// 	return dictionary;
//  }

// function shuffle(array) {
// 	var currentIndex = array.length, temporaryValue, randomIndex;

// 	while (0 !== currentIndex) {

// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		// And swap it with the current element.
// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}

// 	return array;
// }

// function resizeGame() {
// 	var height = window.innerHeight;
// 	var width = window.innerWidth;

// 	game.width = width;
// 	game.height = height;

// 	if (game.renderType === 1) {
// 		game.renderer.resize(width, height);
// 		Phaser.Canvas.setSmoothingEnabled(game.context, false);
// 	}
// }

// window.onresize = function() {
// 	window.resizeGame();
// }
