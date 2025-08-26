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