class WordDefinitionViewModel {

	constructor(algo) {
		this.algo = algo;
		this.order = shuffle([0, 1, 2, 3]);
		this.index = 0;
		this.currentIndex = this.order[this.index];
		this.words = [];
		this.word = {};
	}

	render() {
		// console.log(this.words)
		this.word = game.add.text(game.world.centerX, game.world.centerY - 100, this.words[this.currentIndex]['word'], { font: "100px Arial", fill: "#ffff44", align: "center" });
		this.word.anchor.set(0.5);
		this.word.inputEnabled = true;

		for (var i = 0; i < this.words.length; i++) {
			this.createAnswer(i, this.words[i]['definition'], "#ff0044");
		}
	}

	addWord(word) {
		this.words.push(word);	
	}

	createAnswer(position, word, color) {
		var text = game.add.text(game.world.centerX, game.world.centerY + position * 70, word, { font: "35px Arial", fill: color, align: "center" });
		text.anchor.set(0.5);
		text.inputEnabled = true;

		// text.events.onInputOver.add(this.over, this);
		// text.events.onInputOut.add(this.out, this);
		text.events.onInputDown.add(this.down, this);

		return text;
	}

	// over(item) {
	//     item.fill = "#ffff44";
	// }

	// out(item) {
	//     item.fill = "#ff0044";
	// }

	down(item) {
		var index = item.renderOrderID - 1;
		if (index == this.currentIndex) {
			item.fill = "#ffff44";
			item.text = this.words[index]['word'];
			if (this.index < 3) {
				this.index++;
				this.currentIndex = this.order[this.index]

				this.word.text = this.words[this.currentIndex]['word']
			}
			else {
				console.log(game.world.children.length)
				while (game.world.children.length > 0) {
					game.world.children[0].destroy();
				}
				this.order = shuffle([0, 1, 2, 3]);
				this.index = 0;
				this.currentIndex = this.order[this.index];
				this.words = [];
				this.word = {};
				this.algo();
			}
			
		}
	 
	}
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