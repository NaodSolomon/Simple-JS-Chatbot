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

// # 7 String Slicing & Method Chaining
// Given the string " JavaScript is Fun! ", trim the spaces, convert it to uppercase, and slice out "SCRIPT".
// let text = document.getElementById("mytext");
// let btn = document.getElementById("mybtn");
// let myh = document.getElementById("myh3");

// function structureText(){
//     myText = text.value.toUpperCase().trim();
//     newText = myText.slice(4,10)
//     myh.textContent = newText;
// }

// btn.onclick = structureText;

// #8 Logical Operators & Strict Equality
// Write a condition that checks if a user’s password is strictly equal (===) to "admin123" and the username is not "guest". Log "Access granted" or "Access denied".
// let user = document.getElementById("usernametxtbox");
// let pwd = document.getElementById("Passwordtxtbox");
// let btnsub = document.getElementById("btnsubmit");
// let shH3 = document.getElementById("showh3");

// function Auth(){
//     let userName = user.value;
//     let PwD = pwd.value;
//     if (PwD === `admin123` && userName != "guest"){
//         shH3.textContent = `Access Granted!`;
//     }
//     else{
//         shH3.textContent = `Access Denied!`;
//     }
// }

// btnsub.onclick = Auth;

// #9 While & For Loops
// Use a while loop to count down from 5 to 1. Then, with a for loop, print the numbers 1 through 5.

// let ctdStartNumber = document.getElementById("ctdtxtbox");
// const ctdEndNumber = 1;
// let ctdBTN = document.getElementById("ctdbtn");
// let showCTD = document.getElementById("showctd");

// function countdownWhile(){
//     let ctdStart = Number(ctdStartNumber.value);
//     while (ctdStart >= ctdEndNumber){
//         showCTD.innerHTML += `${ctdStart}<br>`;
//         ctdStart--;
//     }
//     let ctdStart2 = Number(ctdStartNumber.value);
//     for(let i=ctdStart2; ctdStart2>ctdEndNumber; ctdStart2--){
//         showCTD.innerHTML += `${i}<br>`;
//     }
// }

// ctdBTN.onclick = countdownWhile;

// # 10 Arrays + Spread Operator + Function Expression
// Write a function expression that takes three numbers, but call it using an array [2, 4, 6] and the spread operator. The function should log the sum of the three numbers.

// let arrsubmitbtn = document.getElementById("arrsubmit");
// let arrh3 = document.getElementById("arrh3");

// function sumfunc(...nums){
//     let result = 0;
//     for(let num of nums){
//         result += num;
//     }
//     arrh3.textContent = `Result: ${result}`;
// }

// arrsubmitbtn.onclick = () => {
//     let num1 = Number(document.getElementById("num1txt").value);
//     let num2 = Number(document.getElementById("num2txt").value);
//     let num3 = Number(document.getElementById("num3txt").value);

//     let nums = [num1, num2, num3];
//     sumfunc(...nums);
// };

// #11 Rest Parameters + Arrow Functions + Reduce()
// Create an arrow function that takes any number of numeric arguments (using rest parameters) and returns their product using reduce().

// let addBTN = document.getElementById('addbtn');
// let resultBTN = document.getElementById('resultbtn')
// let newH3= document.getElementById('newh3');

// let nums = [];

// function multiplication(accumulator, element){
//     return accumulator * element;
// }

// function showanswer(...nums){
//     if (nums.length >0){
//         let product = nums.reduce(multiplication);
//         newH3.textContent = `${product}`;
//     }
//     else{
//         newH3.textContent = `You haven't entered any number.`;
//     }
// }

// addBTN.onclick = () => {
//     num = Number(document.getElementById('numtxt').value);
//     nums.push(num);
//     newH3.textContent = `You have added ${num} to the list.`
// }

// resultBTN.onclick = () => showanswer(...nums);

// #12 forEach() + Objects + This
// You have an object:

// const user = {
//   name: "Naod",
//   hobbies: ["coding", "farming", "reading"],
//   showHobbies() {
//     this.hobbies.forEach(function(hobby) {
//       console.log(this.name + " likes " + hobby);
//     });
//   }
// };


// Why does this.name not work inside forEach? How can you fix it? (Try arrow functions or .bind(this)).

// const user = {
//     name: "Naod",
//     hobbies: ['coding', 'farming', 'reading'],
//     showHobbies(){
//         this.hobbies.forEach(hobby => {
//             console.log(this.name + " likes " + hobby);
//         });
//     }
// };

// user.showHobbies();


// #13 Map() + Filter() + Destructuring
// Given an array of people objects:
// const people = [
//   {name: "Alice", age: 25},
//   {name: "Bob", age: 17},
//   {name: "Charlie", age: 30}
// ];
// Use filter() to keep only adults (18+), then map() with destructuring to create an array of just their names.

// const people = [
//     {name: "Alice", age: 25},
//     {name: "Bob", age: 17},
//     {name: "Charlie", age: 30}
// ];

// const adults = people.filter(adultified);

// function adultified(person){
//     return person.age>=18 ;
// }

// const names = adults.map(nameOnly);
// function nameOnly({name}){
//     return name;
// }

// console.log(names);


// #14 Classes + Constructors + Methods
// Create a class Rectangle with a constructor that takes width and height. Add a method getArea() that returns the area. Instantiate two rectangles and print their areas.

// class Rectangle{
//     constructor(width, height) {
//         this.width = width;
//         this.height=height;
//     }

//     getArea(){
//         return this.width*this.height;
//     }
// }

// let rect1 = new Rectangle(width=20, height=40);
// console.log(rect1.getArea());
// let rect2 = new Rectangle(width=40, height=50);
// console.log(rect2.getArea());

// #15 Inheritance + Super + This
// Create a Person class with properties name and age. Then extend it with a Student class that adds a grade. Use super() inside the Student constructor to initialize name and age.

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }
}

const st1 = new Student("Naod", 21, 4.0);
console.log(st1);