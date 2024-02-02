// https://www.codewars.com/kata/587136ba2eefcb92a9000027

// This task in progress now

function SnakesLadders() {
    const moves = [
      { from: 2, to: 38 },
      { from: 7, to: 14 },
      { from: 8, to: 31 },
      { from: 15, to: 26 },
      { from: 21, to: 42 },
      { from: 28, to: 84 },
      { from: 36, to: 44 },
      { from: 51, to: 67 },
      { from: 71, to: 91 },
      { from: 78, to: 98 },
      { from: 87, to: 94 },
      { from: 16, to: 6 },
      { from: 46, to: 25 },
      { from: 49, to: 11 },
      { from: 62, to: 19 },
      { from: 64, to: 60 },
      { from: 74, to: 53 },
      { from: 89, to: 68 },
      { from: 92, to: 88 },
      { from: 95, to: 75 },
      { from: 99, to: 80 },
    ];
    return moves;
  }
  
  SnakesLadders.prototype.play = function (die1, die2) {
    let move = die1 + die2;
    let moveCounter = 0;
    for (let i = 0; i <= 100; i++) {
      moveCounter += move;
    }
    return moveCounter;
  };