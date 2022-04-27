//GLOBAL VARIABLES
let time = null
let counter = 20

//HELPER FUNCTION TO GET 3 HTML FROM DOM
const $ = (id) => document.getElementById(id)

//START OUR TIMER
timer = setInterval(goToTerms, 1000)

//IF USER CLICKS 'I ACCEPT' CLEAR INTERVAL
$('accept').addEventListener('click', acceptTerms)

//TIMER
function goToTerms() {
    counter-- //COUNT DOWN BY 1
    if (counter === 0) {
        window.location.href = 'terms.html' //IF IT 0 DISPLAY TERMS
    } else {
        $('seconds').innerHTML = counter
    }
}

//'I ACCEPT' / CLEAR INTERVAL
function acceptTerms () {
    clearInterval(timer)
    $('terms').innerHTML = 'Thank you for accepting terms of service.'
}