//Auto-fill Dynamic JS HTML Variables
var startText = document.getElementById("startText");
var unknownWord = document.getElementById("unknownWord");
var numAttempts = document.getElementById("numAttempts");
var lettGuessedDisp = document.getElementById("lettGuessedDisp");
var userInput = document.getElementById("userInput");
var corrLetts = document.getElementById("userEntered");
var winDisp = document.getElementById("winDisp");
var lossDisp = document.getElementById("lossDisp");
var boardDisp = document.getElementById("boardDisp");
var charImg = document.getElementById("TBHImg");


//Assigned and Initialized Variables
//wins
var wins = 0;
//losses
var losses = 0;
//List of Possible Words
var allWords = ["TOMMY", "ARTHUR", "POLLY", "MICHAEL", "GRACE", "ALFIE", "CAMPBELL"]
//Current gameState
var gameState; //reset -- gameOn -- gameOver -- reset
var lettGuessArr = [];
var numGuesses;

//Win and loss pointers
winDisp.textContent = wins;
lossDisp.textContent = losses;









//main loop start
reset();

document.onkeydown = function (event) {
    if (event.key == "Enter" && gameState == "reset") {
        init();
    }
    else if (userIn(event.key) && gameState == "on") {
        update(event.key.toUpperCase());

    }
    else if (event.key == " " && gameState == "gameOver") {
        reset();

    }
}


// //Letter Entered by User
// document.onkeyup = function (event) {
//     userEntered.textContent = event.key;
//     console.log(userEntered.textContent);
// }

//function section
// reset, init, update, gameover, gamewin, updateBoard, userIn,


function reset() {
    gameState = 'reset';
    startText.textContent = "Press Enter to start the game!";
    numAttempts.textContent = "";
    lettGuessedDisp.textContent = "";
    boardDisp.innerHTML = "&#9830;&#9830;&#9830;&#9830;&#9830;&#9830;&#9830;&#9830;&#9830;&#9830;";
    lettGuessedDisp.textContent = "";
    // img of peaky blinders character
    charImg.src = "assets/images/PBCover.jpg"

}

function init() {
    //current word (randomly pick from array of all words?)
    gameState = "on";

    //number of attempts guess
    numGuesses = 9;

    //pick random word
    unknownWord = allWords[Math.floor(Math.random() * allWords.length)]
    console.log(unknownWord);
    lettGuessArr = [];

    //Update  Display

    startText.textContent = "";
    numAttempts.textContent = numGuesses;
    boardDisp.textContent = updateBoard(unknownWord, lettGuessArr)
}


    function update(letter) {
        //check input to see if right
        var correct = false;
        //if correct set to correct
        for (var i = 0; i < unknownWord.length; i++) {
            if (letter == unknownWord[i]) {
                correct = true;
            }

        }

        //then update the letters guessed array with .push (if incorrect)
        //and the display.text

        lettGuessArr.push(letter);
        var letGuess = "";
        for (var i = 0; i < lettGuessArr.length; i++) {
            letGuess += lettGuessArr[i];
        }
        lettGuessedDisp.textContent = letGuess;


        //Update attempts and the board space
        if (correct) {
            boardDisp.textContent = updateBoard(unknownWord, lettGuessArr);

        }
        else {
            numGuesses -= 1;
            numAttempts.textContent = numGuesses;

        }

        //check game loss conditions
        if (numGuesses < 1) {
            gameLose();
        }

        //check game win conditions
        var win = true;
        var x = 0;
        while (x < boardDisp.textContent.length && win == true) {
            if (boardDisp.textContent[x] == "_") {
                win = false;
            }
            x++;
        }
        if (win) {
            gameWin();
        }

    }


    function gameLose() {
        //change state
        gameState = "gameOver";

        //change message to user text
        startText.innerHTML = "You did not guess correctly! "+ unknownWord + " is to be hung! Press space to try again.";

        //update # of losses
        losses += 1;
        lossDisp.textContent = losses;

        //change img being displayed depending on unknownword
        switch (unknownWord) {
            case ('CAMPBELL'):
                charImg.src = 'assets/images/Campbell.jpg';
                break;

            case ('ARTHUR'):
                charImg.src = 'assets/images/arthur.jpg';
                break;

            case ('ALFIE'):
                charImg.src = 'assets/images/alfie.jpg';
                break;

            case ('TOMMY'):
                charImg.src = 'assets/images/tommy.png';
                break;

            case ('GRACE'):
                charImg.src = 'assets/images/grace.jpg';
                break;

            case ('MICHAEL'):
                charImg.src = 'assets/images/michael.jpg';
                break;

            case ('POLLY'):
                charImg.src = 'assets/images/polly.jpg';
                break;
        }

}

function gameWin() {
    //change gamestate
    gameState = "gameOver";

    //change the msg to the user
    startText.innerHTML = "You guessed correct! Looks like " + unknownWord +    " won't be hung. Press SPACE to play again!";


    //update # of wins
    wins += 1;
    winDisp.textContent = wins;

    //change img being displayed depending on unknownword
    switch (unknownWord) {
        case ('CAMPBELL'):
            charImg.src = 'assets/images/Campbell.jpg';
            break;

        case ('ARTHUR'):
            charImg.src = 'assets/images/arthur.jpg';
            break;

        case ('ALFIE'):
            charImg.src = 'assets/images/alfie.jpg';
            break;

        case ('TOMMY'):
            charImg.src = 'assets/images/tommy.png';
            break;

        case ('GRACE'):
            charImg.src = 'assets/images/grace.jpg';
            break;

        case ('MICHAEL'):
            charImg.src = 'assets/images/michael.jpg';
            break;

        case ('POLLY'):
           charImg.src = 'assets/images/polly.jpg';
            break;
    }


}

function updateBoard(word, lettGuessArr) {
    var printOut = "";
    for (var i = 0; i < word.length; i++) {
        if (lettGuessArr.indexOf(word[i]) < 0) {
            printOut += "_ ";
        }
        else {
            printOut += word[i] + " ";
        }
    }
    printOut = printOut.slice(0, printOut.length - 1);
    return printOut;
}


function userIn(letter) {
    if (letter >= 'a' && letter <= 'z') {
        letter = letter.toUpperCase();
        for (var i = 0; i < lettGuessArr.length; i++) {
            if (letter == lettGuessArr[i]) {
                return false;
            }

        }
        return true;
    }
    else {
        return false;
    }
}







