/*ARRAY - object that contains elements (primitive data type or object)
-can be created by:
    -ARRAY CONSTRUCTOR FUNCTION (not recommended)
    -ARRAY LITERAL: let arrayName = [elements]
**don't use const when creating arrays
*/


//CREATING ARRAY
// let myArray = ['Sally', 23, 'Max', 'Fred']
// console.log(myArray[0])


/*
//CREATING ARRAY-alternate method
let myArray = []
myArray[0] = 'pedro'
myArray[1] = 'sally'
myArray[2] = 'zak'
myArray[3] = 'fred'
console.log(myArray[0])
console.log(myArray.length)
//DELETE ELEMENT
delete myArray[2]
console.log(myArray)
//DELETE ALL ELEMENTS FROM ARRAY
myArray.length=0
console.log(myArray)
*/


//PROCESSING ITEMS IN ARRAY: 
let myArray = ['Sally', 23, 'Max', 'Fred']
//FOR LOOP
// for(let i = 0; i < myArray.length; i++) {
//     console.log(`${myArray[i]}\n`)
// }
//FOR IN (ES5 - don't use)
// for (let element in myArray) {
//     console.log(`${myArray[element]}\n`)
// }
// //PITFALLS OF WORKING WITH FOR IN
// Array.prototype.myname = () => {} //will display with elements in array
// for (let element in myArray) {
//     if (myArray.hasOwnProperty(element)) {
//         console.log(`${myArray[element]}\n`)
//     } 
// }
//.FOREACH() LOOP **(use this one)
// myArray.forEach((name) => {
//     console.log(`${name}\n`)
// })
//FOR OF **(ES6 - use this one)
// for (let element of myArray) {
//     console.log(`${element}\n`)
// }


//MEMBERS OF ARRAY OBJECT: 
/*
ADDING/REMOVING ITEMS
-push(): adds 1 or more elements to end of array & returns new length
-pop(): removes last element & returns that element
-shift(): removes 1st element & returns that element
-unshift() adds 1 or more elements to front of array & returns new length
*/



//ADDING/REMOVING ITEMS
// let names = ['zac','fred','sally']

//PUSH() : adds element
/* names = names.push('jessica','john')
console.log(names) //returns 5 */
 

//POP() : removes last element
/* names = names.pop()
console.log(names) //returns sally (removed item) */


//SHIFT() : removes 1st element
/* names = names.shift()
console.log(names) //returns zak */
 

//UNSHIFT() : adds element(s) to front of array
/* names = names.unshift('Jessica','john')
console.log(names) //returns 5
*/

//**FOR LOOPS ARE THE ONLY WAY TO RETURN ALL ELEMENTS IN ARRAY

 
//SEARCHING/REVERSING/SORTING
//ind
//exOf - searches array for element & returns ind
//ex of first match or -1 if not found (best use when you have to build search)
/* console.log(names.ind
  //exOf('fred'))  *///returns 1


//lastInd
//exOf - finds last instance of same item (for things that 
//exist more than once)
//reverse - reverses order (first is last, last is first...)
//sort - sorts array

//PRE SORT
/* console.log(`Pre Sort:\n`)
names.forEach((name) => {
  console.log(`${name}\n`)
})

//POST SORT
names.sort()
console.log(`\nPost Sort:\n`)
names.forEach((name) => {
  console.log(`${name}\n`)
})
*/


//find()returns first element that passes function test. accepts arguments: value, index, array --ex: return>18 --->returns 25 from array of [4,6,16,25,29,30,45]

//findIndex() returns first elememnt position/index

/*COPY, SLICE, CONCAT 
-concat() joins 2 arrays & returns new array
-join() joins all elements of array into string
-slice() extracts section of array & returns new array
-splice() removes elements from array & (optionally) replaces them
*/

//JOIN
// names = names.join('-')
// console.log(names); //returns Zak - Fred - Sally

//SLICE
// names = names.slice(1,2)
// console.log(names) //returns Fred (position 1)

//SPLICE
// names.splice(1,2, 'Jessica','John','Mike')
// console.log(names) //returns ['zac', 'Jessica', 'John', 'Mike']

/*FILTERING
filter-returns new array containing items for which call back is returned true, every-returns true if every elememt is same type, some, reduce-returns all elements reduce to 1 value, reduceRight
*/

//REDUCE
// let numbers = [10,9,15,5]
// let total = numbers.reduce((previousVal, value) => {
//   return previousVal + value
// })
// console.log(total) //returns 39


/*UTILITY FUNCTIONS & OPERATIONS
-toString, isArray, map, rest operator-allows function to treat indefinite number of arguments as array, spread operator-
*/


//isArray
// console.log(Array.isArray(names)) //returns true

//map : used like a loop, iterates through each element & call function repeatedly to process code on each element 1 at a time w/in array
// let nums = [1,4, 9,15]
// let numsSquared = nums.map((value) => {
//                 return value * value
// })
// console.log(numsSquared) //returns [1,16,81,225]

//REST OPERATOR
// function sum(...args) {
//   let sum = 0
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum
// }
// let x = sum(4,9,16,25,29,100,66,77)
// console.log(x) //returns 326

//SPREAD OPERATOR-allows an iterable such as array to be expanded in places where 0 or more arguments are expected
// const sum = (x,y,z) => {return x + y + z}
// const numbers = [1,2,3]
// console.log(sum(...numbers)) //returns 6

//2-DIMENSIONAL ARRAY - array nested in array
// let employees = [['Sally',10], ['Jim',5], ['Zak',7], ['Judy',15]]
// for (let i = 0; i < employees.length; i++) {
//   console.log(`Name: ${employees[i][0]} Services: ${employees[i][1]} years\n`)
// }
//OR
// employees.forEach(employee => {
//   console.log(`Name: ${employee[0]} Services: ${employee[1]} years\n`)
// })

/*WEB STORAGE - native way of persisting data (persists data on user's system)
-handled by using: hidden fields, cookies, Local Storage (retained indefinitely) & Session Storage (lost once broweser closed)
-localStorage.saveItem('itemname', value) //saves data in the item
-localStorage.getItem('itename') //gets data in item
-localStorage.removeItem('itemname') //removes item
-localStorage.clear() //removes all items
//SHORTCUT TO SAVE ITEM
-localStorage.itemname //saves or gests data in item
-sessionStorage.itemame //saves or gests data in item
*/

//CAN'T STORE ARRAY DIRECTLY INTO LOCAL STORAGE
let employees = [['Sally',10], ['Jim',5], ['Zak',7], ['Judy',15]]

// localStorage.setItem('employees', employees) //becomes string when stored

//CORRECT WAY TO STORE ARRAY
localStorage.setItem('employees', JSON.stringify(employees)) 

//RETRIEVE ARRAY FROM STORAGE
console.log(JSON.parse(localStorage.getItem('employees')));



