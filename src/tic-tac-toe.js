class TicTacToe {
  constructor() {}
  currentPlayer = 'x';
  gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex]) return;
    this.gameField[rowIndex][columnIndex] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }
  getWinner() {
    let matrix = this.gameField;
    if (matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2])
      return matrix[0][0];
    if (matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2])
      return matrix[1][0];
    if (matrix[2][0] == matrix[2][1] && matrix[2][1] == matrix[2][2])
      return matrix[2][0];

    if (matrix[0][0] == matrix[1][0] && matrix[1][0] == matrix[2][0])
      return matrix[0][0];
    if (matrix[0][1] == matrix[1][1] && matrix[1][1] == matrix[2][1])
      return matrix[0][1];
    if (matrix[0][2] == matrix[1][2] && matrix[1][2] == matrix[2][2])
      return matrix[0][2];

    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2])
      return matrix[1][1];
    if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0])
      return matrix[1][1];

    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < this.gameField.length; i++) {
      if (this.gameField[i].includes(null)) {
        return false;
      }
    }
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
