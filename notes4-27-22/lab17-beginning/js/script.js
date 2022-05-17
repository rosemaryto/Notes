//HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

function calculateDays() {
    //PRIVATE VARIABLES
    let event
    let dt
    let year
    let date
    let today
    let oneDay
    let days

    //SELECT VALUES FROM EVENT AND DATE TEXT BOXES
    event = $('event').value
    dt = $('date').value

    //MAKE SURE THAT TEXT BOXES ARE NOT EMPTY
    if (event.length === 0 || dt.length === 0) {
        $('message').innerHTML = 'Enter an event and date.'
        return //adding return like this will exit you out of function like a break
    }

    //MAKE SURE THAT DATE CONTAINS "/" by using indexOf and -1, use positive or 0 if it does contact slashes 
    if (dt.indexOf('/') === -1) {
        $('message').innerHTML = 'SLASH: Please check the date format. (Ex: XX/XX/XXXX)'
        return
    }

    //GET YEAR FROM EVENT DATE STRING AND VERIFY THAT IT'S 4 DIGIT/NUMERIC
    year = dt.substring(dt.length - 4) //returns last 4 digits of our string (whatever the length is minus 4 - not end is not speficied here, so it will print end however long it is)
    // $('message').innerHTML = year

    //MAKE SURE VALUE IS NOT A NUMBER
    if (isNaN(year)) {
        $('message').innerHTML = 'YEAR: Please check the date format: 4 digits. (Ex: XX/XX/XXXX)'
        return
    }

    //CONVERT EVENT DATE STRING TO DATE OBJECT & MAKE SURE IT'S A VALID DATE
    date = new Date(dt)
    if (date.toString() === 'Invalid Date') {
        $('message').innerHTML = 'DATE: Please check the date format: 4 digits. (Ex: XX/XX/XXXX)'
        return
    }

    //CALCULATE DAYS (between your event and right now)

    today = new Date()  //RIGHT NOW

    //HOURS*MINUTES*SECONDS*MILLISECONDS = ONE DAY
    oneDay = 24 * 60 * 60 * 1000

    //USER'S DATE - TODAY'S DATE / ONE DAY = NUMBER OF DAYS
    days = (date.getTime() - today.getTime()) / oneDay

    //ROUND NUMBER OF DAYS UP
    days = Math.ceil(days)

    //CREATE & DISPLAY MESSAGE
    if (days === 0) {
        $('message').innerHTML = `Today is ${event.toUpperCase()}<br>${date.toDateString()}`
    } else if (days < 0) {
        $('message').innerHTML = `${event.toUpperCase()} happened ${Math.abs(days)} days ago.<br>${date.toDateString()}`
    } else if (days > 0) {
        $('message').innerHTML = `${Math.abs(days)} until ${event.toUpperCase()}<br>${date.toDateString()}`
    }
 

    
}

$('countdown').addEventListener('click', calculateDays)
$('event').focus()


