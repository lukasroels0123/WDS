// @ts-check
const taken = -1;
const man = 0;
const king = 1;
let numOfPieces = 12;

function pieces() {
    this.pieces = undefined;

    this.initialize = function() {
        this.pieces = {
            p1: man,
            p2: man,
            p3: man,
            p4: man,
            p5: man,
            p6: man,
            p7: man,
            p8: man,
            p9: man,
            p10: man,
            p11: man,
            p12: man
        };
    };

    this.isPiece = function(piece) {
        return Object.prototype.hasOwnProperty.call(this.pieces, piece);
    };

    this.isMan = function(piece) {
        return this.isPiece(piece) && this.pieces[piece] == man;
    };

    this.isKing = function(piece){
        return this.isPiece(piece) && !this.isMan && this.pieces[piece] == king;
    }

    this.makesTaken = function(piece) {
        if (this.isPiece(piece)) {
            this.pieces[piece] = taken;
            numOfPieces--;
            //switch off the UI element by adding the 'disabled' class name (defined in game.css)
            document.getElementById(piece).className += " disabled";
        }
    };

    // this.collectPiece = function(piece){
    //   if()
    // }

    // this.getPosition = function(piece) {

    //   let res = [];

    //   if (!this.isLetterIn(letter, word)) {
    //     console.log("Letter [%s] is not in target word [%s]!", letter, word);
    //     return res;
    //   }

    //   for (let i = 0; i < word.length; i++) {
    //     if (word.charAt(i) == letter) {
    //       res.push(i);
    //     }
    //   }
    //   return res;
    // };


}