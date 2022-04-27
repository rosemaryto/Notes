/*CORE OBJECTS vs BOM vs DOM
-CORE OBJECTS: Array, String, Number, Object, Math
-BROWSER OBJECTS(BROWSER OBJECT MODE): collection of objects that give you contro of browser & computer screen. Are accessible through global object 'window' & child objects of window including: history, screen, navigator etc
-DOM: collection of objects that give you access to elements w/in web page (document).These objects are accessible through object document (nested w/in window)
    *everything in JS derives from the window object
    *browser is constantly broadcasting events
-window. navigator, navigator.geolocation, location, history, frames, screen, open(), close(), moveTo(), resizeTo(), setTimeout(), setInterval(), document
-NAVIGATOR object exposes info about browser capabilities. Supports memebers: appCodeName (returns code name of browswer), appName(name of browswer), platform (type of computer user is using)
-GEOLOCATION location of user (not accurate on desktop, reserved for mobile devices). Detects: lat, lon, accuracy, altitude, etc. Uses cell tower triangulation via IP address, WiFi & Bluetooth MAC addresses, RFID, device GPS, GSM
*/

//how many members of window object?
// window.console.log(Object.getOwnPropertyNames(window)) //1029
// //useragent
// window.console.log(window.navigator.userAgent) //Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Mobile Safari/537.36
// //component of userAgent
// window.console.log(window.navigator.appName) //Netscape
// //other navigator object members
// window.console.log(window.navigator.platform) //Win32
// window.console.log(window.navigator.onLine) //true
// window.console.log(window.navigator.language) //en-US


//DETECTING USER BROWSER
// let sBrowser, sUsrAg = window.navigator.userAgent; 
// if(sUsrAg.indexOf('Chrome') > -1) { 
//     sBrowser = 'Google Chrome'; 
// } else if (sUsrAg.indexOf('Safari') > -1) { 
//     sBrowser = 'Apple Safari'; 
// } else if (sUsrAg.indexOf('Opera') > -1) { 
//     sBrowser = 'Opera'; 
// } else if (sUsrAg.indexOf('Firefox') > -1) { 
//     sBrowser = 'Mozilla Firefox'; 
// } else if (sUsrAg.indexOf('MSIE') > -1) { 
//     sBrowser = 'Microsoft Internet Explorer'; 
// } 
// window.alert(`You are using: ${sBrowser}`);


/*
window.location - info about URL of currently loaded page
-used to manipulate URL strings like to redirect user
-FIND OUT how many pages user has visited before coming to your page, skip pages, navigate back & forth thru user's session as if user had clicked on back/forward btn
window.frames-collection of all frames on current page
window.screen-provides info about environment outside browser like bit depth, color resolution of screen, total width of screen, total width of screen, total height of screen
window.open/close- open new browswer window (popups)
window.opener - returns reference to window that opened the window, either with open() or by navigating a link w/ target attribute. Ex: if windowA opens windowB, B.opener returns A (parent window)
window.setTimeout() & window.clearTimeout() - allow for scheduling execution of piece of code.
-SetTimeout() attempts to execute given code once after # of milliseconds. Will always return id which represents id of timeout. this id can be used to cancel out of timeout with clearTimeout()
-window.document - is BOM object that refers to currently loaded document (page). Methods & properties fall into DOM category of objects.
*/

/* 
console.log(window.location.href) //http://127.0.0.1:5500/index2-16-22.html
console.log(window.location.protocol) //http:
console.log(window.location.host) //127.0.0.1:5500
console.log(window.location.hostname) //127.0.0.1
console.log(window.location.port) //5500
*/

 
//TAKE USER TO GOOGLE AFTER BUTTON CLICKED
/*  
document.getElementById('getLocation').addEventListener('click', () => {
window.location.href = 'http://www.google.com'

//OPEN GOOGLE IN SEPARATE WINDOW
window.open('http://www.google.com','google','width=350,height=350')

//CLOSE WINDOW
window.close()
}) 
*/


//CENTER window w/in user's screen
window.moveTo((window.screen.width - width) / 2,(window.screen.height - height) / 2)



//HMWK TIP
//listen for load event
/* window.addEventListner('load', () => {
let btn = window.document.getElementById('myButton')
btn.addEventListener('click', function () {
  window.open('popup.html','popup','width=400,height=400')
})
})
*/

//POPUP.HTML
/* window.addEventListener('load', () => {
let parentoutput = window.opener.document.getElementById('logindetails')
parentoutput.innerHTML = 'Hello World'
}) */

/*HTML CODE - SLIDE 23&24
<output id="longindetails></output>
*/

 

 //PRINT A LOT OF TIMES

/*  function boo() {document.write('Boo!<br>');}

window.setTimeout(boo, 3000); //prints once

window.setInterval(boo, 3000); //prints repeatedly every 3 milliseconds */