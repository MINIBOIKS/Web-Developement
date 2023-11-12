//Dom Manipulation
/*const title = document.querySelector('#main-heading');
title.computedStyleMap.color = 'red';
console.log(title);*/

//Traverse the DOM


 //Parent Node Traversal


 //Child Node Traversal


 //Sibling Node Traversal


/*const listItems = document.querySelectorAll('list-items');
console.log(listItems);

for(i = 0; i < listItems.length; i++ ) {
    listItems[i].style.fontSize = '5rem';
} */

//Styling Elements

//GetElementById()
/*const title = document.getElementById('main-heading');
console.log(title);*/

//GetElementByClassName()
/*const listItems = document.getElementsByClassName('list-items');
console.log(listItem);*/

//GetElementByTagName()
/*const listItems = document.getElementsByTagName('li');
console.log(listItem);*/

//querySelector()
/*const container = document.querySelector('div');
console.log(container);*/

//querySelectorAll()
/*const container = document.querySelectorAll('div');
console.log(container);*/

//Creating Elements
const ul = document.querySelector('ul')
const li = document.querySelector('li')

//Adding Elements
ul.append(li)

 // Modifying the text
/*const firstListItem = document.querySelector('list-item')

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);*/

li.innerText = 'X-men'

//Modifying Attributes and Classes
/*li.setAttribute('id', 'main-heading');
li.removeAttribute('id')

const title = document.querySelector('#main-heading');
 console.log(title.getAttribute('id'))*/

 li.classList.add(list-Items)
 // you can also remove: li.classList.remove(list-Items)
 console.log(title.classList.contains('list-items')); 

 //Remove Elements
 li.remove();

