/*EVENTS
    EVENT HANDLING - listen for events (clicking button) & when heard, execute code to respond
    EVENT MODEL - event is broadcast, listen for click event, create event handler to listen for event that is called & code in handler executed

    event listener arguments example:
        btn.addEventlistener('click', writeMsg, false)
        false = USE-CAPTURE (BOOLEAN) is optional parameter, declares whether function should be fired in "capture" phase & is defaulted to "false"
    TYPES OF EVENTS: mouse events (click), keyboard (keypress), window (load), form (submit), touch device events (touchstart)

    EVENT OBJECT created when event fired. Travels with event through DOM. 
        function assigned to event listener is passed to EVENT OBJECT as argument & can be used to access info about fired event

        COMMON PROPERTIES OF EVENT OBJECT: type (name of event), target (DOM node where event originated), currentTarget (DOM node that event callback is currently firing on), bubbles (indicates bubbling event), cancelable (indicates if event can be prevented by calling preventDefault method), defaultPrevented (states whether preventDefault method was called), eventPhase (# reps phase event is on: none(0), capture(1), target(2), bubbling(3)), timestamp (date event occurred)
*/

//BUTTON old school
// const writeMessage = (message) => alert(message)

//ELEMENT PROPERTY EVENTS (GET BUTTON OUT OF DOM)
// let btn = document.getElementById('clickme')
// btn.onclick = () => {
//     alert('What a world')
// }

//EVENT LISTENERS (CALLING HANDLER FUNCTION ie sayHello)
// let btn = document.getElementById('clickme')
// btn.addEventListener('click', sayHello)

// function sayHello() {
//     alert('Hello World Again')
// }

// EVENT LISTENERS (USING CALLBACK FUNCTION) *if you don't have to use function more than 1x
// let btn = document.getElementById('clickme')
// btn.addEventListener('click', () => {
//     alert('Hello World Again')
// }, false) //example of USE-CAPTURE


//EVENT OBJECT
// let btn = document.getElementById('clickme')
// btn.addEventListener('click', (e) => {
//     console.log(e.target) //returns button HTML
//     console.log(e.target.id) //returns id
//     console.log(e.type) //returns event type
// })

/*EVENT PROPAGATION (3 PHASES)
    -flows from document's root to the targe (capture phase 1). It's job is to build propagation path, which will travel back through in bubbling phase. You can listen to events in capture phase by setting 3rd argument to true. *cannot capture in bubbling phase in this case
    -fires on event target (target phase 2). Event fires on target node, before reversing & retracing its steps
    -flows back to document's root (bubbling phase 3). Bubbling frees us from listening for an event on exact element it came from; instead, we listen on an element further up the DOM tree, waitinf for event to reach us
*/

/*EVENT DELEGATION
    -process of using event propagation(bubbling) to handle events at higher level in DOM than element which event originated. Allows us to attach single event listener for elements that exist now/future
*/

//EVENT DELEGATION / BUBBLING
/* let links = document.getElementById('links');
links.addEventListener('click', (e) => {
  alert(e.target.innerHTML);
})
*/

 //STOP PROPAGATION - prevent default actions from occurring.


/*FUTURE VALUE APP*/
//GLOBAL VARIABLES
let monthlyRate
let months
let monthlyInterest
let investment  //HTML ELEMMENT (TEXT)
let rate    //HTML ELEMMENT (TEXT)
let years   //HTML ELEMMENT (TEXT)
let calculate   //HTML ELEMMENT (BUTTON)
let output  //HTML ELEMMENT (OUTPUT)

//HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

//GET DOM ELEMENTS
investment  = $('investment')
rate        = $('rate')
years       = $('years')
calculate   = $('calculate')
output      = $('output')

//CALCUTE THE INVESTMENT AND RETURN RESULT
function calculateInvestment(investment, rate, years) {
    monthlyRate     = rate / 12 / 100;
    months          = years * 12;
        
    //loop to calculate for each month
    for (let i = 1; i <= months; i++) {
        monthlyInterest = investment * monthlyRate
        investment += monthlyInterest
    }
    return investment
}

//GET TEXTBOX VALUES, CALL CALCULATE INVESTMENT, DISPALY RESULTS
//ADD EVENTLISTENER TO BUTTON
calculate.addEventListener('click', () => {
    investment  = parseFloat(investment.value)
    rate        = parseFloat(rate.value)
    years       = parseFloat(years.value)

    investment  = calculateInvestment(investment, rate, years)

//display results in output
    output.innerHTML = `Future value on investment: $${investment.toFixed(2)}`
})
