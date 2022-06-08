/*
FUNCTION - named section of program that performs specific task (serves 2 purposes: process code or process code & return value)
    -can be referenced by name & executed as many times as needed by app
    -FUNCTION retures value, PROCEDURE performs operation, but doesn't return value
    -AKA: built-in functions or (MDN-mozilla developer network - documents them as) built-in objects
*most programming languages have sub routines & functions (everything is a function in javascript)

types of built-in:
    -eval() - evaluaties code represented as string
        console.log(eval('2+2'));
        returns 4
    -isFinite() - determine if number is finite, if number = NaN, positive, infinity = false
    -encodeURI() - (uniform resource identifier) replaces characters by 1,2,3, or 4 escape sequences representing UTF-8 encoding of character:
        econdeURI(('http://www.vectacorp.com/press/jan 30 2015.html'))
        returns http://www.vectacorp.com/press/jan%30%2015.html
*used to prevent vulnerabilites of cross site scripting attacks
    -decodeURI() - puts encoded data from database back to original form

3 FUNCTION CATEGORIES
    -function declarations (most common), 
    -function expressions
    -function constructor

*javascript is an event driven language
*hoisted - js reads declarations first before executing rest of code
*arguments (variable or placeholder in parenthesis) is what you pass into a function & parameters are the values you actually pass into the function

-There are 2 ways of passing values into function *BY VALUE & BY REFERENCE
    -BY VALUE (ex: string primitives) - copy of value is sent to function & changes copy not original value
    -BY REFERENCE (ex: object) - references object, not object itself, is sent to function. When function changes object, it changes original object

*/

//BASIC NAMED FUNCTION (USER-DEFINED FUNCTION)
// function displayCar(color, make, model) {
//     console.log(`I own a car`);
// }
// displayCar();

//PASSING PARAMETERS
// function displayCar(color, make, model) {
//     console.log(`I own a ${color} ${make} ${model}`);
// }
// displayCar('black', 'lexus', '2022');
// displayCar('silver', 'lexus', '2023');

//DEFAULT FUNCTION PARAMETERS
// function displayCar(color, make, model = 'Not Specified') {
//     console.log(`I own a ${color} ${make} ${model}`);
// }
// displayCar('black', 'lexus', '2022');
// displayCar('silver', 'lexus');


/*ARGUMENTS OBJECT - local variable available w/in functions
-can refer to function's arguments w/in function by using arguments object
*/

//BY VALUE
// let strColor = 'white';
// let strMake = 'Lexus';
// let strModel = 'CT200H'
// function displayCar(color, make, model) {
//   strColor = 'black'
//   console.log(`I own a ${color} ${make} ${model}`);
//   console.log(strColor);
// }
// displayCar(strColor, strMake, strModel);
// console.log(strColor);

//BY REF
// function displayCar(car) {
//   console.log(`You own a ${car[0]} ${car[1]}.`);
//   car[0] = 'Chevy';
// }
// let vehicle = ['Honda','Civic']; /*changes original value from Honday to Chevy*/
// displayCar(vehicle);
// console.log(vehicle[0]);
// displayCar(vehicle)


//ARGUMENTS OBJECT (best used for calculators when you don't know the number of arguments)
// function displayCar(color, make, model) {
//   console.log(`I own a ${arguments[0]} ${arguments[1]} ${arguments[2]}`);
// }
// displayCar('white', 'lexus', 'ct200')

 
//ARGUMENTS OBJECT (PRACTICAL EXAMPLE) 
// function calculate(numbers) {
//     let base = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         base += Number(arguments[i]); //convert argument to #
//     }
//     console.log(base);
// }
// calculate(2,30,20,10,50);
// calculate(5,20,100);

//RETURNING VALUES
// function calculate(numbers) {
//     let base = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         base += Number(arguments[i]); //convert argument to #
//     }
//     return base
// }
// console.log(calculate(2,30,20,10,50));
// console.log(calculate(5,20,100));


/*SCOPE
-global variables (outside function)
-local variables (inside function)
*/

//GLOBAL VS LOCAL SCOPE
// let strColor = 'white';     //GLOBAL VARIABLE
// let strMake = 'Lexus';      //GLOBAL VARIABLE
// let strModel = 'CT200H';    //GLOBAL VARIABLE
// function displayCar(color, make, model) {
//     let strYear = '2017'; //LOCAL VARIABLE
//   console.log(`I own a ${color} ${strYear} ${make} ${model}`);
// }
// displayCar(strColor, strMake, strModel);    //WILL WORK
// console.log(strYear)                        //WILL NOT WORK (strYear is not defined)

/*scope & HOISTING
-function DECLARATIONS & VARIABLE DECLARATIONS are always HOISTED to top of containing scope by JavaScript interpreter.
ex: function displayCar() {let make = 'Chevy;
interpreted ---> function displayCar() {let make; make = 'Chevy';}
-use 'var' inside function instead of 'let' to avoid error
*/

//SCOPE & HOISTING (WILL THROW ERROR)
// let make = 'Lexus'
// function displayCar(make) {
    
//     console.log(`I own a ${make}`)
//     let make = 'Chevy' //replace w/ 'var' to resolve error
// }
// displayCar(make)//results in (Uncaught SyntaxError: Identifier 'make' has already been declared)

/*STRICT (will not use in class)
-address problem of JS creating unwanted variables when identifier is mispelled or omit 'let' keyword.
-declared first in function
ex.    let make = 'Lexus'
        function displayCar(make) {
            'use strict';
            console.log(`I own a ${make}`)
            let make = 'Chevy'
        }
        displayCar(make)
*/

/*FUNCTION EXPRESSIONS
-7 TYPES:
    -variable assignment* 
        equivalent to named function declaration
        assigned to variable & referred to by variable name
        should include stmt terminator
        anonymous function (doesn't have name..defined by variable)
        must be coded before any stmt that call it (bc not hoisted)
        immutable & uses 'const' keyword instead of let
    -arrow*
        uses => token & we don't have to type function, return (it's implicit in arrow functions), and curly braces
    -immmediately invoiced function expressions (IIFE)
    -assigned & invoked
    -property assignment
    -callback
    -closure
*/

//SIMPLE VARIABLE ASSIGNMENT (ANONYMOUS FUNCTION) - VARIABLE REPS FUNCTION
// const calculate = function (x, y) {
//     return x + y
// }
// console.log(calculate(20,5))

//!!!THIS IS WHERE VARIABLE ASSIGNMENT FUNCTIONS REALLY COME IN HANDY!!! (using ES5)
// const $ = function (id) {
//     return document.getElementById(id)
// }
// console.log($('name').value)
// console.log($('address').value)
// console.log($('city').value)
// console.log($('state').value)
// console.log($('zip').value)
// console.log($('email').value)


//******ARROW FUNCTION (SIMPLE using ES6)*****
//**ONLY** WORKS FOR VARIABLE FUNCTIONS
// const $1 = (id) => {
//     return document.getElementById(id)
// }

// //**ONLY** WORKS FOR VARIABLE FUNCTIONS
// const $2 = (id) => document.getElementById(id)

// //PARENTHESE OPTIONAL FOR 1 PARAMETER
// const $3 = id => document.getElementById(id) //most efficient
// console.log($1('name').value)
// console.log($1('address').value)
// console.log($2('city').value)
// console.log($2('state').value)
// console.log($3('zip').value)
// console.log($3('email').value)

// //ARROW FUNCTION - NO PARAMETERS
// const displayMsg = () => console.log('Javascript works')
// displayMsg();


/*MODULES 
    -independent reusable code
    -'blocks' of code that you write allowing you to abstract away portions of code that you don't want exposed/accessed by other parts of app
    -everything inside module by default = private
    -public variables, functions, classes are exposed using 'export'
    -exposed modules are called into other modules using 'import' stmt
    -modules must be included in HTML (attribute &value) using [type="module"]
        inline or external script
        <script type="module" src="app.js"></script>
*/

//USING MODULES
import * as calc from './script3-9-22MOD.js'
console.log(calc.add(5,5))
console.log(calc.sub(5,5))
//or
// import { add,sub } from './script3-9-22MOD.js'
console.log(calc.add(4,5))
console.log(calc.sub(5,5))
//my practice
import * as word from './script3-9-22MOD.js'
console.log(word.displayword('green'))

//LAB 7
// function displayTitle() {
//     alert('Welcome to guess the Number Game!')
// }


// function displayGame() {
//     let number = Math.floor(Math.random() * 10 + 1) //will always be 1 - 10 (Math.floor = always down, Math.ceil = always up)
//     let count = 1
//     let guess

//     alert('I\'m guessing a number between 1 and 10')

//     while(true) {
//         guess = Number(prompt('Enter your guess'))
//         if (number > guess) {
//             alert('Too low')
//             count++ //keeping track of guesses
//         } else if (number < guess) {
//             alert('Too high')
//             count++
//         } else if (number === guess) {
//             alert(`You guessed right! The number is ${number}. It took you ${count} tries`)
//             return //breaks out of while loop
//         }     
//     }
// }



// function main() {
//     displayTitle()
//     let playAgain = 'y'
//     while (playAgain === 'y') {
//         displayGame()
//         playAgain = prompt('Do you want to play again? (y/n)')
//     }
//     alert('Thank you for playing the game!')//if they choose 'n'
// }
// main()


