/*
JavaScript
OOP -object oriented programming: uses abstraction to create programmatic models based on real world
    -design of software using a collection of cooperating objects vs traditional: simple list of instructions to/for computer
    -each object is capable of receiving messages, processing data, sending messages to other objects (can be viewed as independent little machine w/ distinct role for overall system) i.e. modularity

EVERYTHING IS BASED ON AN OBJECT
    -Data wrapper objects: Object, String, Number, Boolean, Array Function
    -Utility objects: Math, Date, RegExp
    -Error Objects: Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError

3 CATEGORIES OF OBJECTS
    -Native Objects (all 3 above): String, Number, Array, Date -> let name = 'Zak';
    -Host/Browser Objects: window, document, forms -> alert('Hello World');
    -User-Defined Objects: Defined by you -> const obj = new Object();

PROTOTYPICAL (JavaScript) VS CLASS-BASED PROGRAMMING
    -Objects are uniqye instances of clases (blueprints for objects) in traditional programming.
    -ES5 = Prototypical: classes aren't present. Behavior resuse (inheritance) is accomplished through a process of decorating existing objects which serve as prototypes
    -ES6 = Class-based (kind of): enhanced with class-based style. Allows use of keywords (syntactical sugar) that mimic traditional OOP languages.

CLASSES & INSTANCES
    -class: defines all memebers that characterize certain set of objects (abstract, blueprint, recipe). 
        -> class "Cat" can represent all cats in virtual world
    -instance: instance of class.
        -> Nixon (cat) is an instance of Cat class
    -prototypical language doesnt' make this distincion: it simply has objects. Object used as a template from which to get initial properties for new object. Any object can specify it's own properties & can be "prototype" for another object, allowing 2nd object to share 1st object's properties.

3 WAYS TO CREATE THEM
    -OBJECT LITERAL: comma-separated list of name-value pairs wrapped in curly braces
                    -scope: properties & methods always public
                    -by val: when change is made to Object Literal it affects that object across entire script
    -OBJECT CONSTRUCTOR: when function is called w/ "new" operator, function serves as constructor.
                         internally, JS creates an Object then calls constructor function.
                    -scope: properties & methods can be private/public
                    -by ref: when constructor funciton is instantiated then a change made to that instance won't affect other instances of that object
    -ES56 SYNTAX: newest to blueprint objects
                    -scope: private/public
                    -by ref: changes made to instance won't affect other instances of that object
                    
COMMON TERMS
    -CLASS: defines characteristics of object. (cat or dog)
        -blueprint/recipe for object (never changes really)
        -another name of 'object' is 'instance'
        -you can create different objects using same class bc class is template, while objects are concrete instances based on template
        -can't use arrow functions when defining classes bc 'this' keyword won't work
    -NAMESPACE: container allows you to bundle multiple classes under unique name. (animal)
    -OBJECT: instance of a class
        -objects represents a 'thing' (nouns like dog, cat, bird)
        -actions 'methods' (verbs like run, walk, eat)
        -values 'prperties' (adjectives like weight, color, breed, height)
    -PROPERTY: characteristics of class/object(breed, eye color, weight, length, width)
        -once class is instantiated as an object, it will inherit any properties defined w/in class
    -METHOD: object's ability to do something (speak, walk, run, eat)
    -CONSTRUCTOR: method called at them moment an object is created (instantiation: create new instance of class. Temporarily stores new instance w/in object variable)
        -special type of method that excecutes immediately when class is instantiated
        -great way to set important properties for object on its instantiation i.e. VIN for new car

    -ENCAPSULATION: illustrates fact that an object contains (encapsulates) members: data (properties) & means to do something with that data (methods). Also defines how information w/in clases can be hidden.
    -INHERITANCE: class that inherits characteristics from another class
    -ABSTRACTION: computer program's ability to generically model part of overall solution (hidden math computation behind GUI)
    -AGGREGATION: provides way to separate problem int smaller more manageable parts
    -POLYMORPHISM: ability to call same method on different objects & have each of them respond in their own way
    -STATIC METHOD: function that is bound to the class not an object - things that all objects that may do

4 PILLARS OF OOP
    -ENCAPSULATION: achieved when each object keeps its state private, inside a class. Other objects don't have access to this state, but they can call a list of 'public methods'

ABSTRACTION
    -extension of encapsulation. They both help us develop & maintain big codebase
    -each object should only expose a high-level mechanism for using it
    -this mechanism should hide internal implementation details & reveal operations relevant for the objects

INHERITANCE
    -reuse common logic & extract unique logic into separate class
    -means creating a child class or sub class by deriving from another parent class (forms hierarchy)
    -child class reuses all fields & methods of parent class (common part) & can implement it's own (unique part)

POLYMORPHISM
    -creating different functionalities that is accessible in different ways by different objects
    -can use same interface but achieve different results based on object using interface

OBJECT LITERALS
    -common method for defining objects
    -everything is static
    -don't ever abstantiate class when working with object literal
    -properties are always public
*/

//ES5 
//CLASS
// const Cat = function () {}
// //NEW INSTANCE
// const cat1 = new Cat()
const Cat = function (name, breed, color) {
    let age = 1
    this.eyeColor = 'blue'
    this.init = function () {
    console.log(`The new cat named ${name} is a ${color} ${breed}. He is ${this.age} year(s) old.`)
    }
    this.setAge = function (num) {
        this.age = num;
    }
    //ADDING METHOD
    this.meow = function () {
        console.log(`The cat meowed`)
    }
}
//ENCAPSULATION: DEFINING PUBLIC MEMBERS USING CONSTRUCTOR SYNTAX - you can attach methods to object's prototype & is accessible once the class has been instantiated
Cat.prototype.sleep = function() {
    console.log(`The ${this.eyeColor} eyed cat is sleeping.`)
}
const cat1 = new Cat ('Nixon','Bengal','Snow Mink')
cat1.setAge(10)
cat1.init()
cat1.meow()
cat1.sleep()
const cat2 = new Cat ('James','Bengal','Brown Mink')
cat2.setAge(1)
cat2.init()


//ENCAPSULATION: DEFINING PRIVATE MEMBERS
function Mustang(model) {
    //private property using keyword 'let'
    let _model = model
    //private method using keyword 'let'
    let displayModel = () => {
        console.log(`The model of the car is ${_model}`)
    }
    //public method (this)
    this.showCarModel = () => {
        displayModel()
    }
}
const ford = new Mustang('Ford')
ford.showCarModel() //The model of the car is Ford
console.log(ford.displayModel) //undefined bc private property





//ES6 
//CLASS
class Dog {
    //CONSTRUCTOR FUNCTION - anything inside is private
    constructor(name, color, breed) {
        this.age = 1
        this.breed = breed
        console.log(`The new dog names ${name} is a ${color} ${breed}. He is ${this.age} year(s) old.`)
    }

    //ENCAPSULATION IS HANDLED WITH GETTERS AND SETTERS
    //this is publicly available now
    //use _underscore for internal properties
    get breed() {return this._breed}
    set breed(newBreed) {this._breed = newBreed}

    //ADD PUBLIC METHOD use arrow function
    bark = () => {
        console.log(`The dog barked`)
    }
    //STATIC METHOD
    static eat = () => {console.log(`Now he\'s eating!`)}
}
//NEW INSTANCE
const dog1 = new Dog('River', 'Aussie', 'Blue Merle')
dog1.bark()
dog1.age = 2
Dog.eat()
dog1.breed = 'Chihuahua'
console.log(dog1.breed)


//INHERITANCE EXAMPLE ES5
//BASE CLASS
const Vehicle = function(make, model) {
    this.make = make
    this.model = model
    this.miles = 0
}
Vehicle.prototype.drive = function(miles) {
    this.miles += miles
}
//CAR CLASS
const Car = function(doors) {
    this.doors = doors
}
//MOTORCYCLE CLASS
const Motorcycle = function() {}

//CREATE THE INHERITANCE FOR CAR & MOTORCYCLE
//TAKING BASE CLASS OF VEHICLE & ASSOCIATING IT WITH CAR CLASS, 2 ARE 1
Car.prototype = new  Vehicle('Toyota','Tundra')
Motorcycle.prototype = new Vehicle('Harley-Davidson','Road King')

//CODE TO CREATE NEW INSTANCES OF THE CLASS CAR
//car with 4 doors
const car11 = new Car(4)
console.log(car11.drive(500)) //Your Toyota Tundra has driven 500 miles.
//code below works bc it's now public
console.log(`Your ${car11.doors} door ${car11.make} ${car11.model} has driven ${car11.miles} miles.`)

//CREATE NEW INSTANCE OF MOTOR CYCLE
const moto1 = new Motorcycle()
console.log(moto1.drive(200))
console.log(`Your ${moto1.make} ${moto1.model} has driven ${moto1.miles} miles.`)

//OBJECT LITERAL SYNTAX
const Cat3 = {
    name: 'Nixon',
    displayCatInfo: function(breed,color) {
        return `${this.name} is a ${color} ${breed}`
    }
}
//accessing method
console.log(Cat3.displayCatInfo('Hairless','Minx'))
//accessing property
console.log(Cat3.name)

//ADDING PROPERTIES & METHODS TO OBJECT PROGRAMMATICALLY
Cat3.hungry = true;
console.log(Cat3.displayCatInfo('Siamese','White'))
console.log(`The cat is ${Cat3.hungry ? 'hungry' : 'not hungry'}.`)//The cat is hungry.

//REMOVING MEMBERS PROGRAMMATICALLY
delete Cat3.hungry
console.log(Cat3.displayCatInfo('Siamese','White'))
console.log(`The cat is ${Cat3.hungry ? 'hungry' : 'not hungry'}.`) //The cat is not hungry.

//NESTING OBJECTS
const Animal1 = {
    Cat5: {
        name:'Nixon',
        breed:'Jaguar',
        color: 'Blue'
    }
}
console.log(Animal1.Cat5.name)
console.log(Animal1.Cat5.breed)
console.log(Animal1.Cat5.color)


