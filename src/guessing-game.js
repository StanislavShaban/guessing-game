class GuessingGame {

    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.current = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	var current = this.current = Math.round((this.min + this.max)/2);
    	return current;
    }

    lower() {
    	var current = this.current;
    	this.max = current;
    }

    greater() {
    	var current = this.current;
    	this.min = current;
    }
}

module.exports = GuessingGame;
