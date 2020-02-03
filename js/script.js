const buttonOne = document.getElementById("btn1");
const buttonTwo = document.getElementById("btn2");

let headingOne = document.querySelector("h1");

buttonOne.addEventListener("click", changeBG);
buttonTwo.addEventListener("click", changeBG2);

function changeBG() {
    document.body.classList.toggle("black");
}

function changeBG2() {
    document.body.classList.toggle("green");
}