//BLOCK STMT
/* 
-used to group stmts together into single block of code, DELMITED by curly brackets, {} optional on its own, curly braces required with conditionals, loops, functions 
-commonly used w/ contro stmts: conditionals, loops, functions, objects
*/
// function sayHello() {
//     alert('Enter your name');
// }
// sayHello();

/* CONTROL STMT
-used to make decisions in code
-decision making is anticipation of certain conditions occurring during execution of program & specifying actions to take according to condition's outcome
-decision structures evaluate expressions which produc true or false
-you may choose to write additional stmts to execute depending on outcome or more conditional stmts to refine decision-making logic
*/
/*TYPES OF IF STMTS-if, if else, single stmt suites, else if, nested if, switch
-ELSE-optional clause to execute stmt if condition is false
 */

// //SIMPLE IF STMT
// let num = parseInt(prompt('Enter # btwn 1 & 10'));
// if (num === 5) {
//     alert('You got # right');
// }

// IF/ELSE STMT
// let num = parseInt(prompt('Enter # btwn 1 & 10'));

// if (num === 5) {
//     alert('You got # right');
// } else {
//     alert('You got # wrong');
// }

// IF/ELSE STMT w/ LOGICAL OPERATORS
// let num = parseInt(prompt('Enter # btwn 1 & 10'));

// if (num !== 5 || num > 10) {
//     document.write('Please try again');
// } else {
//     document.write('You got # right');
// }

//SINGLE STMT SUITES
// let num = parseInt(prompt('Enter # btwn 1 & 10'));
// (num === 5) ?document.write('Right!') : document.write('Wrong!');

//ELSE IF
// let grade = parseInt(prompt('Enter student\'s grade'));
// if (grade >= 90) {
//     document.write('Student received A');
// } else if (grade >= 80) {
//     document.write('Student received B');
// } else if (grade >= 70) {
//     document.write('Student received C');
// } else if (grade >= 60) {
//     document.write('Student received D');
// } else {
//     document.write('Student failed');
// }

//NESTED IF STMT (IF inside IF STMT) w/ISNAN () FUNCTION
let num = parseInt(prompt('Enter # btwn 1 & 10'));
if (isNaN(num)) {
    document.write('You need to enter a valid #. Hit refresh & try again.')
} else {
    if (num === 5) {
        document.write('You got the right number!');
    } else {
        document.write('You got the wrong number!');
    }
}