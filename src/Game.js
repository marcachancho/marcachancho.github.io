MarcaChancho.Game = function (game) {
	this.dictionary;

	this.step;
	this.randomIndexes;
	this.batch;

	this.guess;
	this.options = [];
}

MarcaChancho.Game.prototype = {
	create: function () {
		this.stage.backgroundColor = '#000000';

		this.dictionary = this.cache.getJSON('dictionary');

		this.guess = this.game.add.text(
				this.game.world.centerX,
				50,
				"",
				{
					font: "50px Arial",
					fill: "#ffff44",
					align: "center"
				}
			);
		this.guess.anchor.set(0.5);
		this.guess.inputEnabled = true;

		for (var index = 0; index < 4; index++) {
			var option = this.game.add.text(
					this.game.world.centerX,
					50 * (index + 3),
					"",
					{
						font: "15px Arial",
						align: "center"
					}
				);
			option.anchor.set(0.5);
			option.inputEnabled = true;

			option.events.onInputDown.add(this.onDown, this);

			this.options.push(option);
		}
		
		this.reset();

	},

	onDown: function (item) {
		var index = item.renderOrderID - 1;
		var currentIndex = this.randomIndexes[this.step]
		if (index == currentIndex)
		{
			this.options[index].text = this.batch[index].word;
			this.options[index].fill = "#ffff44";
			
			this.step++;
			if (this.step < 4) {
				var currentIndex = this.randomIndexes[this.step];
				this.guess.text = this.batch[currentIndex].word;
			} else {
				this.reset();
			}

		}
	},

	reset: function () {
		this.step = 0;
		this.randomIndexes = Utils.shuffle([0, 1, 2, 3]);
		this.batch = Utils.getRandom(this.dictionary, 4);

		var currentIndex = this.randomIndexes[this.step];
		this.guess.text = this.batch[currentIndex].word;

		for (var index = 0; index < 4; index++) {
			var option = this.options[index];
			option.text = this.batch[index].definition;
			option.fill = "#ff0044";
		}
	},

	update: function () {

	},

	quitGame: function () {

		this.state.start('MainMenu');

	}
};
