
MarcaChancho.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

MarcaChancho.MainMenu.prototype = {

	create: function () {

		// this.music = this.add.audio('titleMusic');
		// this.music.play();

		var text = this.add.bitmapText(0, 64, 'rollingThunder', 'MARCA CHANCHO', 32);
	    text.x = 256 - (text.textWidth / 2);
	    
        this.input.onDown.addOnce(this.startGame, this);

	},

	update: function () {

	},

	startGame: function (pointer) {

		// this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
