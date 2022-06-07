function date() {
    var date = prompt("Enter date");
    document.querySelector(".date").innerHTML = "Date: " + date;
}
   
function venue () {
    var venue = prompt("Enter venue name");
    document.querySelector(".venue-name").innerHTML = venue;
}

var counter = [];
var number = 0;

function add() {
    counter.push(number++);
    document.querySelector(".number").innerHTML = counter.length;
    audio.play();
}

function takeAway() {
    counter.pop(number--);
    document.querySelector(".number").innerHTML = counter.length;
    audio.play();
}

function reset() {
    counter = [];
    document.querySelector(".number").innerHTML = counter.length;
    audio1.play();
}

var audio = new Audio("counter.wav")
    document.querySelector("img").addEventListener("click", function(){
    });

    var audio1 = new Audio("zero.wav")
    document.querySelector(".play-btn").addEventListener("click", function(){
    });


    
