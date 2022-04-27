//LOOPS
/*types: for, while, do while, nested loops &
-looping through objects & arrays
    -for in (traditional method)
    -for of (new ES6 method) 
-loop control stmt - changes execution of loop from standard iterative sequence. Includes break & continue
*/

//FOR LOOP - can iterate over items of ANY sequence like: list, array, string
/*STRUCTURE
for ([initial expression]; [condition]; [increment expression]) 

HOW IT WORKS
1. initial expression executed & usually initializes 1 or more counters & can also declare variables.
2. condition expression is evaluated. If value of condition is true, loop stmt executes. If false, loop terminates. if condition expression is ommitted entirely, condition is assumed true.
3. stmt executes
4. increment expression executes & control returns to step 2.
*/


//FOR LOOP EXAMPLE - will run 10x & display # on browser
// for (let i=1; i <= 10; i++) {
//     document.write(`You\'re on item ${i}<br>`);
// }


//FOR LOOP (SIMPLE LOAN CALCULATION)
// let loanAmount = parseFloat(prompt('Enter amount you want to borrow'));
// let loanTerm = parseInt(prompt('How many years do you want on the loan?'));
// for (let i = 0; i < loanTerm; i++) {
//     loanAmount = loanAmount + (loanAmount * 5.9 / 100);
// }
// document.write(`$${loanAmount.toFixed(2)}`);


//WHILE - repeatedly executes stmt as long as condition is true. if condition becomes false, the stmt w/in loop stops executing & control passes to stmt following the loop.
//while (true) will always be true. What sets it to false is when condition has been met & breaks out of loop.

//WHILE LOOP
// let num = 0;
// while (num < 10) {
//   num++;
//   document.write(`I'm on number ${num}<br>`);
// }
// document.write(`I'm at the end`);


//WHILE LOOP ADVANCED
// let num;
// while (true) {
//   num = parseInt(prompt('Enter a number between 1 and 10'));
//   if (num >= 1 && num <= 10) {
//     break;
//   } else {
//     console.error('Number must be between 1 and 10');
//   }
// }
// console.log(`%c${num} is between 1 and 10`,`color:blue;font-size:1.2em;`); 

//DO / WHILE LOOP - stmt always executes at least once b4 conditiona is checked. (DO this first then go into WHILE loop). If the condition is true, stmt executes again. Condition is checked at end of every execution. when condition is false, execution stops, & control passes to stmt following do/while loop.

//DO WHILE LOOP
// let num = 0;
// do {
//     num++
//     document.write(`You are on number ${num}<br>`);
// } while (num < 10);
// document.write(`You have reached the end of the program.`);

//DO WHILE LOOP ADVANCED
// let num;
// let again = 'y';
// do {
//   num = parseInt(prompt('Enter a number between 1 and 10'));
//   if (num === 7) {
//     console.log('You guessed the right number!');
//   } else {
//     console.log('You guessed wrong!');
//   }
//   again = prompt('Want to play again? (y or n)');
// } while (again === 'y')
// console.log('Thank you for playing!'); 

//LOOP CONTROL STMT - use break to terminate loop. Continue stmt can be used to loop stmt if a condition has not yet been met. Below: asks user for name, iterates through list to find name. if name is found then the loop breaks otherise will continue to loop

//LOOP CONTROL STMT
// let i, found = false;
// let names = ['Zak', 'Joe', 'Sally', 'Mary', 'Fred'];
// let name = prompt('Enter a name to find');
// for (i = 0; i < names.length; i+= 1) {
//     if (names[i] === name) {
//     console.log('I found the name!');
//     found = true;
//     break;
//     } else {
//     continue;
//     }
// }
// if (!found) {
//     console.log('I couldnt find the name!');
// }


//NESTED LOOP - coded w/ another loop. Outer loop executes 3x then inner while loop executes until user enters valid test scores
let totalScore = 0, score;
for (let i = 0; i < 3; i++) {
    while (true) {
        score = parseInt(prompt('Enter test score'));
        if (score >= 0 && score <= 100) {
            totalScore += score;
            break;
        } else {
            console.error('Test score must be between 0 and 100')
        }
    }
}
console.log(`Total score: ${totalScore}`);


//FOR IN LOOP (ARRAYS)
// let person;
// let people = ['zak', 'sally', 'mark', 'fred'];
// for (person in people) {
//     document.write(`${people[person]}<br>`);
// }


//FOR IN LOOP (ARRAYS more efficiaent)
// let person;
// let people = ['zak', 'sally', 'mark', 'fred'];
// for (person of people) {
//     document.write(`${person}<br>`);
// }


//LAB MPG
//GLOBAL VARIABLES
// let miles, gallons, mpg, again = 'y';

// do {
//     miles = parseFloat(prompt('Enter miles driven'));
//     gallons = parseFloat(prompt('Enter number of gallons'));
//     if(!isNaN(miles) && miles > 0 && !isNaN(gallons && gallons > 0)) {
//         mpg = miles / gallons;
//         console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
//     } else {
//         alert('One or both of your entries are invalid');
//     }
//     again = prompt('Do you want to run the app again? (y or n)');
// } while (again === 'y');
// console.log('The app has exited');

//LAB INVESTEMENT CALCULATOR
//GLOBAL VARIABLES
// let futureValue, investment, rate, years

// //COLLECT VALUES FROM USER
// investment = parseFloat(prompt('How much do you want to invest?'));
// rate = parseFloat(prompt('Enter interest rate as xx.x'));
// years = parseFloat(prompt('How many years do you want to invest for?'));

// //PERFORM CALCULATIONS
// futureValue = investment;
// for (let i = 0; i < years; i++) {
//     futureValue = futureValue + (futureValue * rate / 100);
// }

// //DISPLAY RESULTS
// document.write(`Original invest amount: ${investment.toFixed(2)}<br>`);
// document.write(`Interest Rate: ${rate}<br>`);
// document.write(`Years: ${years}<br>`);
// document.write(`Investment future value: ${futureValue.toFixed(2)}`);

