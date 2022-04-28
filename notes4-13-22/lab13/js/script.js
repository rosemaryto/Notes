//VIEW EMPLOYEE
function view(data) {
    let i = 1 //COUNTER TO NUMERICALLY ASSOCIATE EACH EMPLOYEE

    //LOOP THROUGH EMPLOYEES ARRAY & DISPLAY NAMES
     data.forEach(employee => {
         console.log(`${i}. ${employee}`);
         i++
       })
       console.log('')
}


//ADD EMPLOYEE
function add(data) {
    //PROMPT USER FOR EMPLOYEE TO ADD
    let name = prompt('Enter Name')

    //ADD EMPLOYEE TO ARRAY
    data.push(name)


    //SHOW SUCCESS MESSAGE
    console.log(`${name} was successfully added`)
    console.log('')
}


//DELETE EMPLOYEE
function remove(data) {
    //PROMPT USER FOR # OF EMPLOYEE TO DELETE
    let empNum = parseInt(prompt('Enter employee number to delete'))
    
    //MAKE SURE # IS VALID
    if (!empNum < 1 || !empNum > data.length) {
        //SPLICE OUT EMPLOYEE TO DELETE
        let employee = data.splice(empNum - 1)
        //SHOW SUCCESS MESSAGE
        console.log(`${employee} was deleted`)
        console.log('')
    } else {
        alert('Invalid employee number.')
    }
}


//INITIALIZATION
function init() {
     //BEGIN BY SHOWNG MAIN MENU
    console.log('Employee Management App')
    console.log('----------------------')
    console.log('COMMAND MENU')
    console.log('view - Show all emps')
    console.log('add - Add an emp')
    console.log('remove - Delete an emp')
    console.log('exit - Exit app')
    console.log('')


    //CREATE TEMP ARRAY OF EMPS
    let employees = [
        'Zak Ruval',
        'Sue Smith',
        'Pedro Ramirez',
        'Joe Johnson',
        'Stew Frank'
    ]

    //KEEP COMMAND MENU UP UNTIL USER DECIDES TO END PROGRAM
    do {
            //ASK USER FOR COMMAND
            let command = prompt('Enter Command')
            //CHECK TO MAKE SURE USER DIDN'T CANCEL PROMPT
            if (command !== null) {
                //CONVERT VALUE TO LOWER CASE
                command = command.toLowerCase()
                if (command === 'view') {
                    view(employees)
                } else if (command === 'add') {
                    add(employees)
                } else if (command === 'remove') {
                    remove(employees)
                } else if (command === 'exit') {
                    break
                } else {
                    alert('This is not a valid command.')
                }
            } else {
                alert('Please enter a command')
            }
        } while (true)
        //USER EXITED THE PROGRAM
        console.log('Program terminated.')
}

init()