//Auto-fill Variables
var startText = document.getElementById("startText");
var currWord = document.getElementById("currWord");
var numGuess = document.getElementById("numGuess");
var currWord = document.getElementById("currWord");
var lettGuessed = document.getElementById("lettGuessed");
var userEntered = document.getElementById("userEntered");
var corrLetts = document.getElementById("userEntered");
var winDisp = document.getElementById("winDisp");
var lossDisp = document.getElementById("lossDisp");


//Assigned and Initialized Variables
//wins
var wins = 0;
//losses
var losses = 0;
//List of Possible Words
var allWords = ["Birmingham", "Tommy Shelby", "Arthur Shelby", "Polly Gray", "Michael Gray", "Grace", "Peaky Blinders", "Gypsies", "Alfie", "The Derby", "Winston Churchill"]
//Current gameState
var gameState; //reset -- on -- Game over -- reset
//Win and loss pointers
winDisp.textContent = wins;
lossDisp.textContent = losses;

//main loop
reset();



document.onkeydown = function (event) {
    if (event.key == "Enter" && gameState == "reset"){
        init();
    }
    
    // switch (gameState) {
    //     case ('reset'):
    //         init();
    //     case (on):
    //         //alphabet filter 
    //         if (event.key >= 'a' && event.key <= 'z') {
    //             update();
    //         }
    //         break:
    //     case ('over'):
    //         reset();

    // }

}


//Letter Entered by User
document.onkeyup = function (event) {
    userEntered.textContent = event.key;
    console.log(userEntered.textContent);
}

//function section
// reset, init, update, gameover


function init() {
    //current word (randomly pick from array of all words?)
    var currentWord = allWords[Math.floor(Math.random() * allWords.length)]
    console.log(currentWord);
    gameState = "on";
    numGuess = 12;


}

function reset() {

}

function update() {
}

function gameOver() {

}


//if the letter entered by the user is within the 'currentWord' 
            // if (currentWord.includes(userEntered) === true){}
                //place it on the correct letters line?
                //reveal that letter in the currentWord?



        //if the letter entered by the user is not in the current word
           //if(currentWord.includes(userEntered) === false){}
                //decrease numer of guesses remaining by 1





