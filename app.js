const redBtn = document.getElementById("red-btn");
const greenBtn = document.getElementById("green-btn");
const yellowBtn = document.getElementById("yellow-btn");
const whiteBtn = document.getElementById("white-btn");
const whiteWord = document.getElementById("white-word");
const redWord = document.getElementById("red-word");
const greenWord = document.getElementById("green-word");
const yellowWord = document.getElementById("yellow-word");
const body = document.getElementById("body");
const card = document.getElementById("card");
const closeCard = document.getElementById("close");
const showBtn = document.getElementById("show");

redBtn.addEventListener("click", function(){
    body.classList.remove("yellow", "white", "green");
    body.classList.add("red");
    whiteWord.classList.add("hide-word");
    greenWord.classList.add("hide-word");
    yellowWord.classList.add("hide-word");
    redWord.classList.remove("hide-word");

});

greenBtn.addEventListener("click", function(){
    body.classList.remove("yellow", "red", "white");
    body.classList.add("green");
    whiteWord.classList.add("hide-word");
    greenWord.classList.remove("hide-word");
    yellowWord.classList.add("hide-word");
    redWord.classList.add("hide-word");
});

yellowBtn.addEventListener("click", function(){
    body.classList.remove("green", "white", "red");
    body.classList.add("yellow");
    whiteWord.classList.add("hide-word");
    greenWord.classList.add("hide-word");
    yellowWord.classList.remove("hide-word");
    redWord.classList.add("hide-word");
});

whiteBtn.addEventListener("click", function(){
    body.classList.remove("green", "yellow", "red");
    body.classList.add("white");
    whiteWord.classList.remove("hide-word");
    greenWord.classList.add("hide-word");
    yellowWord.classList.add("hide-word");
    redWord.classList.add("hide-word");
});

closeCard.addEventListener("click", function() {
    card.classList.add("hide-card");
    showBtn.classList.remove("show-card");
});

showBtn.addEventListener("click", function(){
    card.classList.remove("hide-card");
    showBtn.classList.add("show-card");
})


