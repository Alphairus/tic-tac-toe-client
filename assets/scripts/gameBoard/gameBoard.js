// 'use strict'
//
// const store = require('./../store.js')
// const api = require('./../games/api.js')
//
// // Creation of the gameboard
//
// const Board = function (board) {
//   this.id = board.id;
//   this.spaces = board.cells;
//   this.turn = 0;
//   for (let i =0; i < this.spaces.length; i++) {
//     if (this.spaces[i] === 'x' || this.spaces[i] === 'o') {
//       this.turn++;
//     }
//   }
//
//   this.player_x = board.player_x;
//   this.player_o = board.player_o || null;
//   this.over = board.over;
// };
//
// Board.prototype.nextPiece = function () {
//   if (this.turn % 2 === 1) {
//     return 'x';
//   } else {
//     return 'o';
//   }
// };
//
// Board.prototype.getSpace = function (index) {
//   return this.spaces[index];
// };
//
// Board.prototype.paintBoard = function (move) {
//   $('#text' + move).text(this.nextPiece());
//   $('#' + move).css('bord-color', '#000');
// };
//
// // game piece placement in spot selected on board
//
// const makeMove = function (event) {
//   event.preventDefault();
//   let move = parseInt(event.target.id);
//   if (this.isValidMove(move)) {
//     this.turn++;
//     let p = this.nextPiece();
//     $('#statusbar').text('Turn ' + this.turn + ': Player ' + p + ' made move ' + move);
//     this.spaces[move] = this.nextPiece();
//     this.paintBoard(move);
//     if (this.win()) {
//       $('#statusbar').text('Player ' + this.nextPiece() + ' wins!');
//       $('.space').css('border-color', '#000');
//       $('#gameboard').css('border-color', '#92fd75');
//       for (let i = 0; i < this.spaces.length; i++) {
//         if (this.spaces[i] === this.nextPiece()) {
//           $('#text' + i).addClass('winner');
//         } else {
//           $('#text' + i).addClass('loser');
//         }
//       }
//       this.over = true;
//     } else if (this.turn === 9) {
//       $('#statusbar').text('The game is a tie!');
//       $('#gameboard').css('border-color', '#92fd75');
//       this.over = true;
//     }
//
//     gameAPI.update(move, this);
//   } else {
//     $('#statusbar').text('That is not a valid move!');
//   }
// };
//
// // check for valid move
// Board.prototype.isValidMove = function (move) {
//   if (this.over || this.getSpace(move) !== '') {
//     return false;
//   }
//
//   return true;
// };
//
// // Checking for win condition
// Board.prototype.win = function () {
//   let piece = this.nextPiece();
//   return this.isHorizontalWin(piece) || this.isVerticalWin(piece) || this.isDiagonalWin(piece);
// };
//
// Board.prototype.isHorizontalWin = function (piece) {
//   let win1 = this.spaces[0] === piece && this.spaces[1] === piece && this.spaces[2] === piece;
//   let win2 = this.spaces[3] === piece && this.spaces[4] === piece && this.spaces[5] === piece;
//   let win3 = this.spaces[6] === piece && this.spaces[7] === piece && this.spaces[8] === piece;
//   return win1 || win2 || win3;
// };
//
// Board.prototype.isVerticalWin = function (piece) {
//   let win1 = this.spaces[0] === piece && this.spaces[3] === piece && this.spaces[6] === piece;
//   let win2 = this.spaces[1] === piece && this.spaces[4] === piece && this.spaces[7] === piece;
//   let win3 = this.spaces[2] === piece && this.spaces[5] === piece && this.spaces[8] === piece;
//   return win1 || win2 || win3;
// };
//
// Board.prototype.isDiagonalWin = function (piece) {
//   let win1 = this.spaces[0] === piece && this.spaces[4] === piece && this.spaces[8] === piece;
//   let win2 = this.spaces[6] === piece && this.spaces[4] === piece && this.spaces[2] === piece;
//   return win1 || win2;
// };
//
// const createBoard = function (board1, gameboard) {
//   for (let i = 0; i < board1.spaces.length; i++) {
//     gameboard.append('<div class="space" id="' + i + '"></div>');
//     $('#' + i).append('<h1 id="text' + i + '"></h1>');
//     const bindMakeMove = makeMove.bind(board1);
//     $('#' + i).on('click', bindMakeMove);
//   }
//
// };
//
// function boardInit() {
//   let $board = $('#gameboard');
//   const board1 = new Board(gameStore.game);
//   $('#statusbar').text('Begin new game!');
//   createBoard(board1, $board);
// }
//
// function endGame() {
//   $('.space').remove();
//   $('#statusbar').text('');
// }
//
// function openGame(board) {
//   endGame();
//   let $board = $('#gameboard');
//   createBoard(board, $board);
//   for (let i = 0; i < board.spaces.length; i++) {
//     $('#text' + i).text(board.spaces[i]);
//   }
// }
//
// function getUserWins(data) {
//   let games = data.games;
//   let winCount = 0;
//   for (let i = 0; i < games.length; i++) {
//     let game = new Board(games[i]);
//     let numX = 0;
//     let numO = 0;
//     for (let j = 0; j < game.spaces.length; j++) {
//       if (game.spaces[j] === 'x') {
//         numX++;
//       } else if (game.spaces[j] === 'o') {
//         numO++;
//       }
//
//     }
//
//     if (game.over && game.win() && numX > numO) {
//       winCount++;
//     }
//   }
//
//   return winCount;
// }
//
// function getUnfinishedGamesIds(data) {
//   let games = [];
//   for (let i = 0; i < data.games.length; i++) {
//     if (!data.games[i].over) {
//       games.push(data.games[i].id);
//     }
//   }
//   return games;
// }
//
// module.exports = {
//   boardInit,
//   endGame,
//   openGame,
//   getUserWins,
//   getUnfinishedGamesIds,
// };
