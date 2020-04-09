var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var btnRandomizer = document.querySelector("#randomize");
var hexElements = "0123456789ABCDEF";
var colorCode1 = '#';
var colorCode2 = '#'; 

function setGradient() {
    body.style.background =
      "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
      css.textContent = body.style.background;
  }

function randomize() {
    var hexRandom1 = "#";
    var hexRandom2 = "#";

    //create random hex value for first color
    for (var i = 0; i < 6; i++) {
       hexRandom1 += hexElements[(Math.floor(Math.random() * hexElements.length))]; 
    }
    //create random hex value for second color
    for (var i = 0; i < 6; i++) {
        hexRandom2 += hexElements[(Math.floor(Math.random() * hexElements.length))]; 
     }
    color1.value = hexRandom1; //attach the random hex to the variable in setGratident function
    color2.value = hexRandom2; //attach the random hex to the variable in setGratident function
    setGradient() //apply the random colors to html
} 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
setGradient();
btnRandomizer.addEventListener("click", randomize);

console.log(color1.value);


