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
    if (task.length === 0) {
        //GET TASKS FROM STORAGE OR EMPTY STRING IF STORAGE EMPTY
        
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
        $('tasks').value = ''
        //SHOW UPDATED TASK LIST
        displayTaskList()
    } else {
        alert('Please add a task.')
    }
}

//CLEAR TASKS
const clearTasks = () => {

}
$('add_task').addEventListener('click', addTask)
$('clear_tasks').addEventListener('click', clearTasks)