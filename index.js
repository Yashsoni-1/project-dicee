var randomNumber1 = Math.round((Math.random() * 5) + 1);



var randomNumber2 = Math.round((Math.random() * 5) + 1);


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw 🤝";
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 wins";
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}


var randomDiceImgSource1 = "images/dice" + randomNumber1 + ".png"; 
var randomDiceImgSource2 = "images/dice" + randomNumber2 + ".png"; 

document.querySelector(".img1").setAttribute("src", randomDiceImgSource1);
document.querySelector(".img2").setAttribute("src", randomDiceImgSource2);