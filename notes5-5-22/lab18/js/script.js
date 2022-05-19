function view (arrEmployees) {
    //CREATE ITERATOR - COUNTER THAT APPEARS NEXT TO EMPLOYEES NAME
    let i = 1;
    //LOOP THRU EMP ARRAY
    for (let employee of arrEmployees) {
        console.log(`${i}. ${employee}`)
        i++ //INCREMENT COUNTER
    }
    console.log('')
}

function add(arrEmployees) {
    //COLLECT EMPLOYEE'S NAME AND TITLE
    let name = prompt('Enter employee\'s name')
    let title = prompt('Enter employee\'s title')
    //PUS NEW EMPLOYEE TO TEMP ARRAY
    arrEmployees.push(`${name} (${title})`)
    //DISPLAY SUCCESS MESSAGE
    console.log(`${name} was successfully added.`)
    console.log('')
}

function del(arrEmployees) {
    //ASK USER WHICH EMPLOYEE THEY WANT TO DELETE
    let num = parseInt(prompt('Enter employee number to delete'))
    //CHECK & MAKE SURE IT'S A NUMBER
    if (num < 1 || num > arrEmployees.length) {
        alert('Invalid employee number')
    } else {
        let employee = arrEmployees.splice(num - 1, 1)
        console.log(`${employee} was successfully deleted`)
        console.log('')
    }
}

function init() {
    //DISPLAY TO COMMAND MENUE
    console.log('The Employee Mgt App')
    console.log('--------------------')
    console.log('COMMAND MENU')
    console.log('show - Show all employees')
    console.log('add - Add an employee')
    console.log('del - Delete an employee')
    console.log('exit - Exit the app')
    console.log('--------------------')
    console.log('')

    //START WITH AN EMPTY ARRAY
    let arrEmployees = []

    //FETCH JSON DATA (USING PROMISES) OR USE ASYNC/AWAIT FOR 15 EXTRA POINTS
    fetch('../lab18/data/employees.json')
        .then(response => response.json())
        .then(data => {
            for (let employee of data.employees) {
                arrEmployees.push(`${employee.name} (${employee.title})`)
            }
            //KEEP USER AT COMMAND MENU
            do {
               //ALLOW USER TO ENTER A COMMAND
               let command = prompt('Enter command').toLowerCase()
               //CHECK & MAKE SURE COMMAND IS NOT NULL
               if (command !== null) {
                   if (command === 'show') {
                       view(arrEmployees)
                   } else if (command === 'add') {
                       add(arrEmployees)
                   } else if (command === 'del') {
                       del(arrEmployees)
                   } else if (command === 'exit') {
                       break
                   } else {
                       alert('that is not a valid command')
                   }
               } else {
                   alert('Please enter a command')
               }
            } while (true)
            console.log('The program has been terminated')
        })
        .catch(error => console.log(error.message))

    
}
init()