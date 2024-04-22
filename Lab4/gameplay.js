
function swapTiles(cell1, cell2) {
    /*jslint browser:true */
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}


function shuffle() {
    var row, row2;
    var column, column2;
    for (row = 1; row <= 3; row++) {
        for (column = 1; column <= 3; column = column + 1) {
            row2 = Math.floor(Math.random() * 3 + 1);
            column2 = Math.floor(Math.random() * 3 + 1);
            swapTiles("cell" + row + column, "cell" + row2 + column2);
        }
    }
}


function isGameWon() {
    /*jslint browser:true */
    /*jslint devel: true */
    if ((document.getElementById("cell" + 11).className === "tile1") && (document.getElementById("cell" + 12).className === "tile2") &&
            (document.getElementById("cell" + 13).className === "tile3") && (document.getElementById("cell" + 21).className === "tile4") &&
            (document.getElementById("cell" + 22).className === "tile5") && (document.getElementById("cell" + 23).className === "tile6") &&
            (document.getElementById("cell" + 31).className === "tile7") && (document.getElementById("cell" + 32).className === "tile8") &&
            (document.getElementById("cell" + 33).className === "tile9")) {
        alert("Congrats, you won!");
    }
}


function clickTile(row, column) {
    /*jslint browser:true */
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile !== "tile9") {
        //jobb
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className === "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                isGameWon();
                return;
            }
        }
        //bal
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className === "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                isGameWon();
                return;
            }
        }
        //fent
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className === "tile9") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                isGameWon();
                return;
            }
        }
        //lent
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className === "tile9") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                isGameWon();
                return;
            }
        }
    }
}
