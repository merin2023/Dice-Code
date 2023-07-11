
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 +".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML="Player1 wins!!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML="Player2 wins!!";
}
else{
    document.querySelector("h2").innerHTML="Draw";
}