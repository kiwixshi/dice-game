var randomNum1, randomNum2;
randomNum1 = Math.ceil(Math.random()*6);
randomNum2 = Math.ceil(Math.random()*6);
document.querySelector(".die1>img").setAttribute("src", "./images/dice"+randomNum1+".png");
document.querySelector(".die2>img").setAttribute("src", "./images/dice"+randomNum2+".png");
if(randomNum1>randomNum2){
    document.querySelector("h1").textContent = "Player 1 Wins!"
}else if(randomNum1==randomNum2){
    document.querySelector("h1").textContent = "Draw!"
}else{
    document.querySelector("h1").textContent = "Player 2 Wins!"
}