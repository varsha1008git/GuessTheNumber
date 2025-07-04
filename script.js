let snumber=Math.floor(Math.random()*100 + 1);
let attempts=0;
let maxattempts=10;
function checkGuess(){
    const guess=Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const lives = document.getElementById("lives");
    attempts++;
    if(guess==snumber){
         message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.🎉`;
        message.style.color="black";
    }
    else if(guess>snumber){
        message.textContent="📈Your guess is too high!Try other number..";
        message.style.color="black";
    }
    else if(attempts>=maxattempts){
         message.textContent = `💀 Game Over! The number was ${secretNumber}.`;
        message.style.color = "red";
    }
    else {
        message.textContent="📉Your guess is too low!!";
         message.style.color="black";
    }
    lives.textContent = `❤️ Lives remaining: ${maxattempts - attempts}`;
}
