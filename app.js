const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");



function getRandomNumber() {
    return 1 + Math.floor(Math.random() * 6);
}

function showDice() {
    diceTriggerEl.addEventListener("click", function () {
    let myRandomNumber = getRandomNumber();
    diceImageEl.src="images/dice" + myRandomNumber + ".png";
    diceImageEl.classList.toggle("rotate");
    })
}

showDice();

// // jQuery 
// function showDice() {
//     $('.dice__trigger').on("click", function() {
//         let myRandomNumber = getRandomNumber();
//         $(".dice__image").attr("src", ("/images/dice" + myRandomNumber + ".png"));
//         $('.dice__image').toggleClass("rotate");
//     })
// }

// showDice()

// function getRandomNumber() {
//     return 1 + Math.floor(Math.random() * 6);
// }
