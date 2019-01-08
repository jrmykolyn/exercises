class Player {
  constructor() {
    this.chips = 500;
    this.hand = [];
    this.isPlaying = true;
  }

  draw(card) {
    if (typeof card !== 'number') {
      return;
    }

    this.hand.push(card);

    return this.hand;
  }

  call(amount) {
    if (this.chips < amount) {
      return;
    }

    this.chips -= amount;

    return this.chips;
  }

  bet(amount) {
    if (this.chips < amount) {
      return;
    }

    this.chips -= amount;

    return this.chips;
  }

  raise(amount) {
    if (this.chips < amount) {
      return;
    }

    this.chips -= amount;

    return this.chips;
  }

  fold() {
    this.isPlaying = false;
  }
}

module.exports = Player;
