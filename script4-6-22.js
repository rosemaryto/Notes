//DOM (a platform & language-neutral interface that allows programs & scripts to dynamically access & update content, structure, style of document) scripting - ability to select elements, elements of webpage in memory are represented as objects
//CRUD (create, retrieve, update, delete) operations
/*DOM LEVEL 1 (core & html)
-CORE provides set of interfaces representing any structured doc & definitions for representing XML (Node interface)
-HTML provides additional interfaces for HTML doc: document, element, attribute, text interfaces
*/

//DOM LEVEL 2 (core, views, events, style, traversal & range, & html)
//DOM LEVEL 3 (core, load, save (xml), validation, events(keyboard) & xpath)

/*
DOM tree: select Elements (Selectors), traverse DOM: parents, children, siblings, create elements, insert created elements,modify existing elements, delete elements
-ROOT ELEMENTS OF DOCUMENT INTERFACE: documentElement(returns root <html>, head, title, body, forms (returns array of <form> elements, images, links (returns array of <a> elements))
-SELECTORS all objects w/in webpage can be selected, modified, deleted by way of document interface.
-METHODS (to select): getelementbyid, queryselector(returns 1st element in doc order), queryselectorall (returns array of all element objects w/in doc that match specified selectors), getelementsbytagname (returns all elements that match tag name, getelementbyclassname (all elements with class name)
*/

 
//GRAB ALL FORM INTO ARRAY USING DOCUMENT INTERFACE
// let myForm = document.forms
// for (let i = 0; i < myForm.length; i++ ) {
// console.log(myForm[i].id)
// }


//GET ELEMENT BY ITS ID
// let p = document.getElementById('hello')
// console.log(p.innerText)
 

//GET AN ELEMENT BY ITS TAGE
// let p2 = document.querySelector('p.p2')
// let p2 = document.querySelector('ul li:first-of-type a')
// console.log(p2.innerHTML)
 

//GET MULTIPLE ELEMENTS BY TAG NAME
// let multiple = document.querySelectorAll('p')
// console.log(multiple[0].innerText)


//GET MULTIPLE ELEMENTS BY TAG NAME (OPTION 2)
// let li = document.querySelectorAll('ul li.item')
// console.log(li.length)
 

//GET MULTIPLE ELEMENTS BY CLASS NAME
// let li2 = document.getElementsByTagName('li')
// console.log(li2.length)


//SPECIFIC QUERY
// let LI = document.querySelector('ul li a')
// console.log(LI.innerText)
 

/*
DOM TRAVERSAL: PARENTS
-parentNode (returns parent node of current node if one exists.Returned as node object)
-parentelement (same. Returned as element object)
*/
 

//GET PARENT NODE OF ALL LI
// let parentLI = document.querySelector('ul li:nth-of-type(7)')
// console.log(parentLI.parentElement)
// console.log(parentLI.parentNode)


/*
DOM TRAVERSAL: children
-children (returns array of element child nodes)
-firstElementChild (returns element object representing 1st child)
-lastElementChild (returns element object reresenting last child)
    -childNodes (array of child nodes), firstChild (Node object for first child node), lastChild (Node object for last child node)
*/


//GET CHILDREN OF UL ELEMENT
// let ul = document.querySelector('ul')
// console.log(ul.children)
// console.log(ul.firstElementChild.innerHTML)
// console.log(ul.lastElementChild.innerHTML) //important for grid pagination, so you know what element to go with next element to grab from array for next page in grid


/*
DOM TRAVERSAL: siblings
-nextElementSibling (returns next sibling element node)
-previousElementSibling (returns previous sibling element node)
    -nextSibling (returns node object for next sibling, if node doesn't exist --> returns null), previousSibling (returns node object for previous sibling, if node doesn't exist --> returns null)
*/


//GET ELEMENT'S NEXT SIBLING
// let parentLI2 = document.querySelector('ul li:first-of-type')
// console.log(parentLI2.nextElementSibling.innerHTML)


/*
DOM SCRIPTING: creating, modifying, deleting elements
-createElement(): creates new HTML element
-createTextNode(): creates new text node
    -*(DON'T USE) append(): adds previously created HTML element node to DOM
-(use this one) appendChild(): adds previously created HTML element to DOM
-removeChild(): removes html element from dom
-replaceChild(): replaces html element in dom w/ different html element
-insertBefore(): inserts node as child, right ebfore an existing specified child
*/


//CREATING & ADDING DOM ELEMENTS
//create element
let li = document.createElement('li')

//add class name & id
li.id = 'newItem'
li.className = 'list-group-item'

//option2 to set class attribute
/*  li.setAttribute('class', 'list-group-item') */

//create text node
let text = document.createTextNode('Weed The Garden')

//add text node to element created
li.appendChild(text)

//get the ul from the dom
let list = document.getElementById('items')

//attach text & element to the list
list.appendChild(li)//INSERT AT END

//insert text & element anywwhere in the list (2nd position)
list.insertBefore(li, list.children[1])


//insert at beginning
/* list.insertBefore(li, list.children[0]) */


//remove FIRST LI from list
/* list.removeChild(list.children[0]) */


//MANIPULATE ELEMENT ATTRIBUTES
/*
-className: gets & sets value of class attribut of specific element
-id: gets unique id of elemement
-innerText: gets or sets all text contained by element & all child elements
innerHTML: gets or sets all text, including html tags contained by elemement
                -attributes, classList,clientHeight/clientWidth (gets width/heigh of element in pixels), tagName (name of tag displayed in uppercase)
*/
 

//ATTRIBUTE METHODS - to get attributes: see it, remove it, setting particular value
//GET ELEMENT BY ATTRIBUTE --> Class: card card-body
let div = document.getElementById('main')
if (div.hasAttribute('class')) {
                console.log(`Class: ${div.getAttribute('class')}`)
}

//REMOVE ID ATTRIBUTE
/* div.removeAttribute('id') */
//!!!every single html tag that exists in html has its own object or its own interface represented w/in html element service


//GET ID OF DIV USING DOM LEVEL 3 SPECIFICATION
console.log(div.id)
 

/*
EXAMPLE OF GETTING/SETTING IMAGE
let imageElement = document.getElementById('image')
console.log(`Image element src: ${imageElement.src}`)
imageElement.src = 'building1.jpg'
*/

/*
SET FOCUS ON AN ELEMENT
let btnPlay = document.getElementById('btnPlay')
btnPlay.focus()
*/


