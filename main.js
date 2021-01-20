let tileMov;
let tileTO;
let possibleMoves = [];
let pointMove = [];
let pieceMove;
let index = 0;
let chosen = false;
let rightOver;
let leftOver;
let scoreOpp = 0;
let scoreYou = 0;
let indexK;
let oppPawns;
let youPawns;

function onclick(event){
    tileMov = event;
    pointMove = [];
    indexK = 0;
    leftOver = null;
    rightOver = null;
    suggestPosition(tileMov);
}

function move(event){
    tileTO = event;
    for(let i = 0; i < possibleMoves.length && chosen; i++){
        if(document.getElementById(tileTO) === possibleMoves[i]){
            if(pointMove.includes(possibleMoves[i])){
                if(leftOver === tile[index - 9]){
                    leftOver.removeChild(leftOver.firstElementChild);
                }
                if(rightOver === tile[index - 7]){
                    rightOver.removeChild(rightOver.firstElementChild);
                }
                scoreYou++;
            }
            document.getElementById(tileTO).appendChild(document.getElementById(tileMov))
            chosen = false;
        }
    }
    oppPawns = 12 - scoreYou;
    youPawns = 12 - scoreOpp;
    document.getElementById('oppScore').innerHTML = oppPawns;
    document.getElementById('yourScore').innerHTML = youPawns;
}

let suggestPosition = function(piece){
    getLeftAndRight(piece);
    let boolean = true;
    for(let i = 0; i < possibleMoves.length; i++){
        if(possibleMoves[i].firstElementChild != null){
            if(possibleMoves[i].firstElementChild.className === 'p2piece' && boolean){
                getLeftAndRightEnemy();
                boolean = false;
                i--;
            }
        } else if(possibleMoves[i].className != 'noplaytile'){
            possibleMoves[i].animate([{opacity: 1},
                    {opacity: 0.1, offset: 0.7},
                    {opacity: 0}],
                500);
            chosen = true;
        }
    }

}

// document.getElementById("confirmButton").onclick = function(){
//     document.getElementById("message").innerHTML = "Order Placed";
//     document.getElementById("confirmButton").style.display = "none";
//     document.getElementById("cancelButton").style.display = "none";
// }

let selectPosition = function(piece, pos){
    document.onclick(possibleMoves);

}

let makemove = function(piece, event){
    pieceMove = event;
    document.getElementsByClassName("piece");
}

function getLeftAndRight(piece){
    for(let i = 0; i < tile.length; i++){
        if(tile[i] === document.getElementById(piece).parentElement){
            index = i;
            break;
        }
    }

    possibleMoves[0] = tile[index - 7];
    possibleMoves[1] = tile[index - 9];
}

function getLeftAndRightEnemy(){
    if(possibleMoves[0].firstElementChild != null && possibleMoves[0].firstElementChild.className === 'p2piece'){
        rightOver = possibleMoves[0];
        possibleMoves[0] = tile[index - 14];
        pointMove[indexK] = possibleMoves[0];
        indexK++;
    }
    if(possibleMoves[1].firstElementChild != null && possibleMoves[1].firstElementChild.className === 'p2piece'){
        leftOver = possibleMoves[1];
        possibleMoves[1] = tile[index - 18];
        pointMove[indexK] = possibleMoves[1];
        indexK++;
    }
}
