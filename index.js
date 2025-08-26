// #2 Accept User Input & Type Conversion
// Use prompt() to ask the user for their age. Convert the input into a number, then log whether they are old enough to vote (18+).

// let personName = document.getElementById("nameTxtBox");
// let age = document.getElementById("ageTxtBox");
// let displayBtn = document.getElementById("displayBtn");
// let displayH3 = document.getElementById("displayh3");

// function displayNameAge(){
//     let UserName = personName.value;
//     let Age = age.value;
//     displayH3.textContent = `Hi ${UserName}, you are ${Age} years old.`;
// }

// displayBtn.onclick = displayNameAge;

// #3 Constants & Math Object
// Define a constant PI using Math.PI. Then calculate the area of a circle with radius 5.

// const PI = Math.PI;
// let r = document.getElementById("radiusBox");
// let resultBTN = document.getElementById("resultBtn");
// let dH3 = document.getElementById("displayResult");

// function calcAreaOfCircle(){
//     let radius = Number(r.value);
//     result = 2 * PI * radius ** 2;
//     dH3.textContent = `Area: ${result}`;
// }

// resultBTN.onclick = calcAreaOfCircle;

// let up = document.getElementById('upperlimit');
// let down = document.getElementById('lowerlimit');
// let rand = document.getElementById('randombtn');
// let displayrand = document.getElementById('randomdisplay');


// #4 Random Number Generator & If Statements
// Generate a random number between 1 and 10. If the number is greater than 5, log "You win!", otherwise log "Try again."


// function randomize(){
//     const upper = Number(up.value);
//     const downer = Number(down.value);

//     let result = Math.floor(Math.random() * (upper - downer)) + downer;
//     if (result > 50){
//         displayrand.textContent = ` You Won! Your random number is ${result}`;
//     }
//     else{
//         displayrand.textContent = ` You Lost! Your random number is ${result}`;
//     }
// }

// rand.onclick = randomize;


// #5 Checkbox & Ternary Operator
// Suppose you have an HTML checkbox:

// <input type="checkbox" id="subscribe">


// In JS, use the checked property and a ternary operator to log "Subscribed" if checked, otherwise "Not Subscribed".
// let check = document.getElementById('subscribe');
// let checkBTN = document.getElementById('checkbtn');
// let h3display= document.getElementById('displaycheck')

// function isFamily(){
//     let message = check.checked? `Yay you are family!!`: `Please subscribe`;
//     h3display.textContent = message;
// }

// checkBTN.onclick = isFamily;

// #6 Switches & String Methods
// Ask the user for a day of the week (e.g., "monday"). Convert the input to lowercase and use a switch statement to log a custom message for each day.

// let day = document.getElementById("datetxtbox");
// let answerBTN = document.getElementById("answerbtn");
// let displayAnswer = document.getElementById("displayanswer");

// function guessTheDate(){
//     let date = day.value.toLowerCase();
//     switch (date){
//         case "monday":
//             displayAnswer.textContent = `Yess today is monday.`;
//             break;
//         case "tuesday":
//             displayAnswer.textContent = `Yeah Tuesday is the day.`;
//             break;
//         case "wednesday":
//             displayAnswer.textContent = `Alright Wednesday here we go.`
//             break;
//         case "thursday":
//             displayAnswer.textContent = `Are we there yet thursdays.`
//             break;
//         case "friday":
//             displayAnswer.textContent = `What! How! and then the week is almost over Friday.`
//             break;
//         case "saturday":
//             displayAnswer.textContent = `Shall I study Nah Now is the time for games.`
//             break;
//         case "sunday":
//             displayAnswer.textContent = `Sunday lets go to church.`
//             break;
//         default:
//             displayAnswer.textContent = `What are you talking about, there is no such date.`
//             break;
//     }

// }

// answerBTN.onclick = guessTheDate;

// String Slicing & Method Chaining
// Given the string " JavaScript is Fun! ", trim the spaces, convert it to uppercase, and slice out "SCRIPT".
let text = document.getElementById("mytext");
let btn = document.getElementById("mybtn");
let myh = document.getElementById("myh3");

function structureText(){
    myText = text.value.toUpperCase().trim();
    newText = myText.slice(4,10)
    myh.textContent = newText;
}

btn.onclick = structureText;