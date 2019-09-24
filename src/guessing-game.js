class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.last = null;
    }

    guess() {
        this.last = Math.ceil((this.max + this.min) / 2);
        return this.last;
    }

    lower() {
        this.max = this.max === this.last ? this.last - 1 : this.last;
    }

    greater() {
        this.min = this.last;
    }
}

module.exports = GuessingGame;
