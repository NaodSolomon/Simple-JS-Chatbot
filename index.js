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

let up = document.getElementById('upperlimit');
let down = document.getElementById('lowerlimit');
let rand = document.getElementById('randombtn');
let displayrand = document.getElementById('randomdisplay');

function randomize(){
    let upper = up.value;
    let downer = down.value;
    result = Math.floor((Math.random() * upper) + downer);
    displayrand.textContent = `Your random number is ${result}`;
}

rand.onclick = randomize;