'use strict';

var prompt = require('prompt')// include nodejs es6
var players = require('./players.js')
const firstPlayer =  'O'
var xx=0;
const getBoard = () => {
    return {
        1: '1', 2: '2', 3: '3', //dict
        4: '4', 5: '5', 6: '6',
        7: '7', 8: '8', 9: '9'
    }
}

class TicTacToe {
    constructor() {
        this.winningLines = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 5, 9], [3, 5, 7],
            [1, 4, 7], [2, 5, 8], [3, 6, 9]
        ];

        this.board = getBoard()

        this.currentPlayer = firstPlayer

        this.players = {
            'O': new players ("k"),
            'X': new players ("p"),
        }
    }

    start() {
        this.printBoard()
        prompt.start()
        
        prompt.get(['location'], (err, result) => { // arrow function callback function
            //console.log(result.location);
            this.setBoard(result.location);
            if (this.checkWin()) {
               console.log(this.currentPlayer+"win");
                this.printBoard();
                return
            }else if (this.checkdraw()){
                console.log('DRAW');
                return
            } else {
                this.switchPlayer();
            }
            this.start();
        });
    
    }

    setBoard(location) {
        if(this.board[location]=='O'||this.board[location]=='X'){
            
           
        }else{
           this.board[location] = this.currentPlayer ;
           xx++;
        }
        
    }
    checkdraw(){
        if(xx>=9){
            return true;
        }
    }
    switchPlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O'
        } else {
            this.currentPlayer = 'X'
        }
    }

    checkWin() {
        let checker = 0;
        for(let i=0; i < this.winningLines.length; i++) {
            checker = 0;
            for (let j = 0; j < this.winningLines[i].length; j++) {
                if (this.board[this.winningLines[i][j]] === this.currentPlayer) {
                  checker++;
                }
                if (checker === 3) {
                    return true;
                } 
            }
        }
        return false;
    }

    printBoard() {
        console.log(`| ${this.board[1]} | ${this.board[2]} | ${this.board[3]} |`)
        console.log(`| ${this.board[4]} | ${this.board[5]} | ${this.board[6]} |`)
        console.log(`| ${this.board[7]} | ${this.board[8]} | ${this.board[9]} |`)
    }
}

let game = new TicTacToe()
game.start()