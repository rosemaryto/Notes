// //LAB 2: MPG CALCULATOR
// let milesDriven = prompt('Enter the number of miles driven')
// let gallons = prompt('How many gallons does your fuel tank hold?')
// let mpg = milesDriven / gallons
// console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon`)

//LAB 3: TEST SCORE AVERAGE
//DEFINE VARIABLES
let score1, score2, score3, total = 0, average;

//COLLECT SCORES FROM USER
score1 = parseFloat(prompt('Enter the 1st score'));
total += score1;
score2 = parseFloat(prompt('Enter the 2nd score'));
total += score2;
score3 = parseFloat(prompt('Enter the 3rd score'));
total += score3;

//FIND AVERAGE OF 3 SCORES
average = total / 3;

//DISPLAY RESULT
document.write(`The first number entered was ${score1}.<br/>`);
document.write(`The first number entered was ${score2}.<br/>`);
document.write(`The first number entered was ${score3}.<br/>`);
document.write(`The grand total of the 3 scores was ${total}.<br/>`);
document.write(`The average of the 3 scores was ${average.toFixed(2)}.`);