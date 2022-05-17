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
// let car = 'My daily driver is a Chevy Camaro. I also own a Chevy Suburban'
// console.log(car.search(/Chevy/g))
//returns 21

//slice, substr, substring - all used to extract parts of a string & return extracted part into new string.
let car = 'Chevy Camaro'
console.log(car.slice(0, 5)) //returns Chevy

let car1 = 'My daily driver is a Chevy Camaro'
console.log(car1.split(' ')) //returns array ['My', 'daily', 'driver', 'is', 'a', 'Chevy', 'Camaro']

//toLowerCase or toUpperCase
console.log(car.toLocaleLowerCase()) //chevy camaro

//TRIM removes white spaces from both ends of string
let car3 = '           Chevy Camarao    '
console.log(car3.trim())

/*REGULAR EXPRESSIONS - object that describes patter of characters & used to perform pattern matching, search & replace functions on text
-great for credit card,social security, dob validation
MODIFIER - used to perform case-sensitive & global searches
    ex: i (perform case-insensitive matching)
        g (perform global match (finds all matches instead of stopping at first match))
        m (perform multiline matching-continues onto next paragraph)
*/
let car4 = 'Let\'s turn the Honda on and go for a ride soon!'
console.log(car4.match(/on/g)) //returns array (on,on,on)

 /*   Brackets - used to find range of characters
        [abc] find any character between brackets
        [^abc] find any character NOT between brackets
        [0-9] find any digit between brackets
        [^0-9] find any digit NOT btwn 
        (x|y) find any alternatives specified ie. x or y
*/
let car5 = 'Let\'s turn the Honda on and go for a ride soon!'
console.log(car5.match(/[^on]/g)) //returns array of all letters NOT 'o' or 'n'

/*
METACHARACTERS - are characters w/ special meaning
    .   find single character, except newline or line terminator
    \w  find word character
    \W  find non-word character
    \d  find digit
    \D  find non-digit character
    \s  find whitespace character
    \S  find non-whitespace char
    \b  find match at beginning/end of word
    \B  find match not at beginning/end of word
    \0  find null character
    \n  find new line break
    \f  find form feed char
    \r  find carriage return char
    \t  tab char
    \v  vertical tab char
    \xxx    char specified by hexadecimal number dd
    \uxxxx  unicode char specified by hexadecimal number xxxx
*/

let car6 = 'Let\'s turn the Honda on and go for a ride soon!'
console.log(car6.match(/\W/g)) //return chars that are not words

let zip = 'Your zip code is 92115.'
console.log(zip.match(/\d/g)) //return 9,2,1,1,5

/*
QUANTIFIERS
n+  matches any string that contains at least one n
n*  zero or more ocurrences of n
n?  zero or one occurences of n
n{X}    contains a sequence of X n's
n{X,Y}  contains a sequence of X to Y n's
n{X, }  contains a sequence of at least X n's
n$  string with n at end of it
^n  string with n at beginning of it
?=n string that is followed by specific string n
*/
let zip1 = 'Your zip code is 92115.'
console.log(zip1.match(/\d{5}/g)) //return 92115 (all digits that match patter of 5 numbers)

let zip2 = 'Your zip code is 92115-1115'
console.log(zip2.match(/\d{5}(-\d{4})?/)) //return 92115-1115 & -1115

/*REGEX OBJECT
supports following members:
-Properties
    global
    ingoreCase
    lastIndex
    multiline
    source
-Methods
    exec()
    test()
    toString()
*/


let zip3 = 'Your zip code is 92115-1115'
let pattern = new RegExp('92115')
console.log(pattern.exec(zip).toString()) //returns 92115


/*WORKING WITH NUMBERS/MATH
-numeric literal-constant, fixed sequence of numbers
-primitive numeric value-like string, number, boolean, undefined, null, everything else is an object
-number object-number object used to explicitly tell interpreter you want new # object

COMMON METHODS (using MATH.)
    -PI
    -abs(x) -absolute value of x
    -ceil(x) -rounds up always
    -floor(x) -rouds down always
    -max(x,y,z) -returns highest number
    -min(x,y,z) -returns lowest number
    -pow(x,y)
    -random() -returns random # between 0 and 1
    -round(x) -rounds up or down
    -sqrt(x)
*/

const x = Math.PI
console.log(x)

let y = -10;
console.log(Math.abs(y)) //returns 10

let z = .6434;
console.log(Math.floor(z)) //returns 0

console.log(Math.max(10,20,30,40,50)) //returns 50

console.log(Math.pow(4,4)) //returns 256

console.log(Math.sqrt(9)) //returns 3


/*DATES 
-create using new Date()
    ex: let d = new Date()
              = new Date (milliseconds)
              = new Date (dateString)
              = new Date (year, month, day, hours, minutes, seconds, milliseconds)
-COMMON METHODS
    -getDate()
    -getDay()
    -getFullYear()
    -getHours()
*/

//returns day of month (from 1-31)
let d = new Date()
console.log(d.getDate()) //returns 16 bc today = 5/16/22

let e = new Date()
console.log(e.getFullYear()) //returns 2022 bc today = 5/16/22

//returns hour (0-23)
let f = new Date()
console.log(f.getHours()) //returns 6 bc now is 6am

//returns minutes (0-59)
let g = new Date()
console.log(g.getMinutes()) //returns 28 bc now is 6:28am

//returns month (0-11) - 0 January
let h = new Date()
console.log(h.getMonth()) //returns 4 bc now is May

//converts date portion of Date object into string
let i = new Date()
console.log(i.toDateString()) //returns Mon May 16 2022 bc today = 5/16/22

//start 1:45

