/*WORKING W/ STRINGS
-literal-constant, fixed sequence of characters between quotation marks
-primitive-5 data types: string, number, Boolea, undefined, null. Everything else is an object - as soon as you reference a string property/method, the primitive is converted to an object automatically
object-used to explixitly tell interpreter that you want to create new strong object (not recommended)
	-supports 3 properts & many methods

-char data type is one with fixed length
-trim(): removes white spaces
-charAt(): returns character at specified index
-charCodeAt(): returns unicode character at specified index
-concat(): joins 2 or more strings together
-fromCharCode(): converts unicode to characters
-indexOf(): returns position of first found occurence of specified value in string
-lastIndexOf(): returns position of first found occurence of specified value
-match(): searches string for a match against regular expression & returns matches
    -modifier (g-searches entire string & not just 1st occurence)
-replace(): searches string for specified value/reg expression & returns new string where specified values are replaced
-search(): searches string for specified value/reg expression & returns position of match
    -use search() over indexOf() when you require use of reg ex
*/

//charCodeAt()
// let car = 'Chevy'
// console.log(car.charCodeAt(0))
//returns 67 --> unicode for uppercase C

//indexOf()
// let car = 'My daily driver is a Chevy Camaro'
// console.log(car.indexOf('Chevy'))
// //returns 21

//lastIndexOf()
// let car = 'My daily driver is a Chevy Camaro. I also own a Chevy Suburban'
// console.log(car.lastIndexOf('Chevy'))
// //returns 48

//match()
// let car = 'Let\'s turn the Honda on and go for a ride soon!'
// console.log(car.match(/on/g))
//returns on, on, on

//replace()
// let txtApp = 'The quick brown fox jumps over the lazy dog'
// let urName = prompt("What is your name?")
// alert(`${txtApp.replace('the lazy dog', urName)}`)

//search()
let car = 'My daily driver is a Chevy Camaro. I also own a Chevy Suburban'
console.log(car.search(/Chevy/g))
//returns 21







