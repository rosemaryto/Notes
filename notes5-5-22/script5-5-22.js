/*
**you gotta have something in between mongoDB & javaScript application and that's your API that you build with node.js and express.js to get data from mongoDB and make it available in a asynchronous way to your client/javascript application

Our progression path
-Intro to AJAX
-XMLHttpRequest Object
    -Loading XML Data
    -Loading JSON Data
    -Using Web APIs
-Promises
-The Fetch API
-Async/Await
-Making Cross Origin Requests

AJAX (partial page refresh)
-stands for Asynchronous JavaScript and XML (Extensible Markup Language - data transport layer, you can make up your own tags), to send AJAX requestion - JavaScript uses either traditional XMLHttpRequest (XHR) object or Fetch API which is like a candy wrpper for XHR object
-common data formats for working w/ AJAX are HTML (uncommon), XML (rarely used anymore, defines the data that the tags contain) - extensible markup language is open-standard device independent format that must be parsed by JavaScript in the browser, JSON (very common) - JavaScript Object Notation is now most popular format for AJAX apps. JSON files are faster and smaller than XML files & are easier to parse since JSON data is returned in native JavaScript objects

XHR (XMLHttpRquest) Object
-AJAX communication handled in JavaScript by XHR object, is broken down into requests & responses
-XHR was designed by MS for Outlook Web Access, this object can include data that tells server what data is being requested & how data should be processed, can be used to retrieve any type of data & supports protocols other than HTTP, often processed by server-side application
-COMMON REQUEST (SENDING DATA) MEMBERS OF XHR OBJECT
    -.open(method (GET OR POST), url, async (should always be true), user (username), pass (password if api requires credentials for athentification)): opens a connection for request at specified URL. Specify method as either GET or POST and wheter or not transmission should be asynchronous (true) or synchronouse (false)
    -.send([data]): starts request. This method can included data that gets send with request. Must be called after a request connect has been opened: Use
        .send() for GET requests
        .send([data]) for POST reqests
-COMMON RESPONSE (HHAT WE GET BACK) MEMBERS OF XHR OBJECT
    -status: code returned in numeric format (values: 200 for ok or 404 for Page not found)
    -readyState: number value that indicates state of current request (0 UNSENT, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE)
    -responseType: enumerated value that defines response type (possible values include json, text, document, etc)
    -responseXML: content that's returned from server in XML format
-COMMON EVENTS MEMBERS OF XHR OBJECT
    -readystatechange: event that occurs when state of request changes
*/


/****
//LOADING XML DATA: step-by-step
//-opening a connection to an XML file
//-the .open() method is used to point to the XML file that will be fetched & to set method used for requesting data (GET in this case). Then .send() method is called to initiate request

//Handling state change of request
//-readystatechange event is used to handle state chage of request. All code for iterating through loaded XML file will be written w/ this event handler function

//start with creating new instance of XHR object
const xhr = new XMLHttpRequest ()
//open connection
xhr.open('GET', '../notes5-5-22/demos/01_load_xml/data/team.xml')
//initiate request
xhr.send()
xhr.onreadystatechange = () => {
    //check and see if fetch was successful
    if (xhr.readyState === 4 && xhr.status === 200 ) {
        let xmlDoc = xhr.responseXML
        let team = xmlDoc.getElementsByTagName('teammember')
        for (let i = 0; i < team.length; i++) {
            document.body.innerHTML +=
            xmlDoc.getElementsByTagName('name') [i].childNodes[0].nodeValue + '<br>' +
            xmlDoc.getElementsByTagName('title') [i].childNodes[0].nodeValue + '<br>' +
            xmlDoc.getElementsByTagName('bio') [i].childNodes[0].nodeValue + '<br><br>'
        }
    }
}
xhr.onerror = (e) => {console.error(e.message)}
****/


/****
//LOADING JSON DATA-step-by-step
//create new instance of XHR object & store w/in object variable named xhr. Next, response type is set to 'json'. This way browser knows to handle data contained in respons stream as JSON data

//CREATE NEW INSTANCE OF XHR OBJECT
const xhr = new XMLHttpRequest()

//SET RESPONSE TYPE TO JSON (default is XML)
xhr.responseType = 'json'

//OPEN CONNECTION
xhr.open('GET', '../notes5-5-22/demos/02_load_json/data/team.json')

//INITIATE REQUEST
xhr.send()

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        //DUMP JSON DATA INTO EMPLOYEES ARRAY/VARIABLE
        let employees = xhr.response;
        for (let employee of employees) {
            document.body.innerHTML += `${employee.name}<br>${employee.title}<br><br>`
        }
    }
}
xhr.onerror = (e) => {console.error(e.message)}
****/

/*USING WEB APIs
-AJAX requests usually get data from web service APIs
-you can bild your own AP or use free ones like JSON Placeholder & ReqRes to practice making asynchronous calls w/in your apps
-these web services provide API that accesses fake data that's in JSON format mimicking the kind of data that is returned ny real web services

JSON PLACE HOLDER API: (fake data that json placeholder api can consume)
/users - 10 users with data like name, username, email
/posts - 100 blog posts etc
/albums
/photos
/todos
    to slect all users then you would use URL: https://jsonplaceholder.typicode.com/users
*/

/****
//CREATE NEW INSTANCE OF XHR OBJECT
const xhr = new XMLHttpRequest()
//SET RESPONSE TYPE TO JSON (default is XML)
xhr.responseType = 'json'
//OPEN CONNECTION
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/')
//INITIATE REQUEST
xhr.send()
xhr.onreadystatechange = () => {
    //wait until everything is loaded & the status is ok, then parse data
    if (xhr.readyState === 4 && xhr.status === 200) {
        //DUMP JSON DATA INTO EMPLOYEES ARRAY/VARIABLE
        let users = xhr.response;
        for (let user of users) {
            document.body.innerHTML += 
            `${user.name}<br>
             <a href="mailto:${user.email}">${user.email}</a><br>
             ${user.phone}<br>
             ${user.company.name}<br>
             ${user.website}<br><br>`
        }
    } else if (xhr.status === 404) {
        console.error(`Can\'t find page`) //this else if is optional to have custom error message
    }
}
xhr.onerror = (e) => {console.error(e.message)}
****/

/*PROMISE - object that may produce single value some time in future: either resolved value or reason that it's not resolved (like network error)
-3 states: pending (first created), fulfilled (request returns its value), or rejected (an error occurred)
-promise that is no longer pending is considered settled. This is true whether promise is fulfilled or rejected. Promise can be resloved w/o being fulfilled
-Many JS APIs will return Promise objects. The Fetch API is one
-Promise objects have special syntax that handle the fulfilled value or reason for rejection
-.then() = fulfilled or rejected, .catch() = handle errors
*/

//CREATING PROMISE
const myFetch = (url) => {
    return new Promise((resolve, reject) => {

        //place XHR object in here like JSON OR XML

        const xhr = new XMLHttpRequest()
        //SET RESPONSE TYPE TO JSON (default is XML)
        xhr.responseType = 'json'
        xhr.onreadystatechange = () => {
            //wait until everything is loaded & the status is ok, then parse data
            if (xhr.readyState === 4) {
                //if condition is true do this otherwise do this (single statement suite)
                (xhr.status === 200) ? resolve(xhr.response) : reject(new Error(xhr.status))
                //DUMP JSON DATA INTO EMPLOYEES ARRAY/VARIABLE
                let users = xhr.response;
                for (let user of users) {
                    document.body.innerHTML += 
                    `${user.name}<br>
                    <a href="mailto:${user.email}">${user.email}</a><br>
                    ${user.phone}<br>
                    ${user.company.name}<br>
                    ${user.website}<br><br>`
                }
            }
        }
        //OPEN CONNECTION
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/') 
        //INITIATE REQUEST
        xhr.send()
    })
}


myFetch('https://jsonplaceholder.typicode.com/users/')
    .then((users) => console.log(users))
    .catch((e) => console.log(e))
//start: 46:39