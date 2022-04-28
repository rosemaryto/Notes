//GLOBAL VARIABLES
let storage
let list
let task
let tasks = []

//GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

//DISPLAY TASK LIST
const displayTaskList = () => {
    //CHECK TO SEE IF DATA IN ARRAY
    if (tasks.length === 0) {
        //GET TASKS FROM STORAGE OR EMPTY STRING IF STORAGE EMPTY
        storage = localStorage.getItem('tasks') || ''

        //IF NOT EMPTY, CONVERT TO ARRAY & STORE IN TASKS VARIABLE
        if (storage.length > 0) {
            tasks = storage.split('|')
        }
    }

    //IF THERE ARE TASKS IN ARRAY...
    //SORT & CREATE TASKS STRING
    if (tasks.length > 0) {
        tasks.sort()
        list = tasks.join('\n')

        //DISPLAY TASKS STRING
        $('task_list').value = list
    }
}

//ADD TASK
const addTask = () => {
    //MAKE SURE TEXT BOX IS NOT EMPTY
    if($('task').value !== '') {
        //ADD TASK TO ARRAY
        tasks.push($('task').value)
        //ADD TASK LIST TO STORAGE
        localStorage.setItem('tasks', tasks.join('|'))
        //CLEAR TEXT BOX
        $('task').value = ''
        //SHOW UPDATED TASK LIST
        displayTaskList()
    } else {
        alert('Please add a task.')
    }
}

//CLEAR TASKS
const clearTasks = () => {
    //EMPTY ARRAY
    tasks.length = 0 
    //REMOVE TASKS FROM STORAGE
    localStorage.removeItem('tasks')
    //CLEAR OUT TASK LIST field
    $('task_list').value = ''
}

$('add_task').addEventListener('click', addTask)
$('clear_tasks').addEventListener('click', clearTasks)