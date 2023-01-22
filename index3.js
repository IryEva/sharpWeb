// parentElement
var itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// FirstChild
console.log(itemList.firstChild);

// firstElementChild
itemList.firstElementChild.textContent = 'Helo 1';

// previousElementSibling
itemList.previousElementSibling.style.color = 'green';

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Helo Div');

// Create text node
var newDivText = document.createTextNode('Helo World');

// Add text to div
 newDiv.appendChild(newDivText);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');
 container.insertBefore(newDiv,h1);

 //var Div2Text = document.createTextNode('Hello World');
// Div2.appendChild(Div2Text);
// var h2 = document.querySelector('header .h2');
// container.insertBefore(Div2 , h2);


let parent = document.querySelector('.list-group');
let helloWorld = document.createElement('li')

helloWorld.innerHTML = `<li class="list-group-item"> Hello World </li>`
parent.insertBefore(helloWorld,parent.children[0])