var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create });

function preload () {
	game.load.json('dictionary', 'static/coa.json');
	game.load.spritesheet('button', 'assets/sprites/button.png', 100,100);
}

var question;

var answer1;
var answer2;
var answer3;
var answer4;

function create () {
	game.stage.backgroundColor = '#D9D9D9'
	
	var dictionary = loadDictionary();

	var clase = new ViewModel();
	clase.getList();

	answer1 = createAnswer(0);
	answer2 = createAnswer(1);
	answer3 = createAnswer(2);
	answer4 = createAnswer(3);
}

function loadDictionary(){
	var dictionary = shuffle(game.cache.getJSON('dictionary'));
	console.log(dictionary.slice(0,5));
	return dictionary;
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

function createAnswer(position){
	var text = game.add.text(game.world.centerX, game.world.centerY + position*70, "click and drag me", { font: "65px Arial", fill: "#ff0044", align: "center" });
	text.anchor.set(0.5);
	text.inputEnabled = true;
	text.events.onInputOver.add(over, this);
	text.events.onInputOut.add(out, this);
	text.events.onInputDown.add(down, this);
	text.events.onInputUp.add(up, this);
	return text;
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

function over(item) {

    item.fill = "#ffff44";
}

function out(item) {

    item.fill = "#ff0044";
    item.text = "click and drag me";

}

function down(item) {

    item.text = "clicked times";

}

function up(item) {

    item.text = "thanks for clicking!";

}


