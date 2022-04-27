//GET ELEMENTS FROM DOM: FORM & TEXTBOX (task list)
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

//ADD TASK
//handle submission
form.addEventListener('submit', (e) => {
    //PREVENT FORM SUBMISSION
    e.preventDefault()


    //GET VALUE FROM TEXT BOX
    let newItem = document.querySelector('#item').value
    //CREATE NEW LI ELEMENT
    let li = document.createElement('li')
    //ADD CLASS TO LI
    li.className = 'list-group-item'
    //CREATE TEXT NODE BASED ON INPUT VALUE
    li.appendChild(document.createTextNode(newItem))


    //CREATE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    //ADD BOOTSTRAP CLASS
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //CREATE TEXT NODE, SET IT TO  'X', AND APPEND TO DELETE BUTTON
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    //APPEND DELETE BUTTON TO LIST ITEM
    li.appendChild(deleteBtn)


    //CLEAR TEXTBOX
    document.querySelector('#item').value = ''


    //APPEND LI TO UL
    itemList.appendChild(li)
})

//DELETE ITEM BASED ON CLASS "DELETE" (OTHERWISE ENTIRE LIST DELETES)
itemList.addEventListener('click', (e) => {
    //CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
    if (e.target.classList.contains('delete')) {
        //CONFIRM DELETION
        if (confirm(`Are you sure you want to delete this task '${e.target.parentElement.innerText}'?`)) {
            //SELECT THE PARENT LI & THEN DELETE
            itemList.removeChild(e.target.parentElement)
        }
    }

})