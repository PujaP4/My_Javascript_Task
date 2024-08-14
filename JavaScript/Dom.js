//arrow function in one line

const sub = (n,b) => n-b;

//DOM
console.log(window.document); //to get document written in both ways
console.log(document); // to get document


//How to access any element

//ID
const IDElement = document.getElementById('para');
console.log(IDElement);

//class
const title = document.getElementsByClassName('title');  // will give array for same class element
console.log(title[0]);

//tag name
const tag = document.getElementsByTagName('h1');
console.log(tag);

//Querry selector
const querryCalss = document.querySelector('.title');
console.log(querryCalss);

const querryTag = document.querySelector('h1');
console.log(querryTag);

const querryID = document.querySelector('#para');
console.log(querryID);

const querrySelectorAll = document.querySelectorAll('li');
console.log(querrySelectorAll);


//perform action 

const changePara = document.getElementById('para');
changePara.innerText = 'DOM';

changePara.innerHTML = `<div class='myTitle'>Hello DOM ${5+5}</div>`  //will add div tag

//Input tag

const num = document.getElementById('num');
console.log(num);

// Change attribute value
num.setAttribute('type','text');

//or Change attribute value another syntax

const changeAttr = document.getElementById('image');
changeAttr.src = '/imageDocument/account.svg'



//styling

changePara.style.padding = '5px';
changePara.style.background = 'yellow';

// Adding and Deleting Elements
const parent = document.getElementById('parent');

//create Element 
const newElement = document.createElement('h3');
parent.appendChild(newElement);

// Remove element

parent.removeChild(newElement);

//replace child
const otherElement = document.createElement('div');
parent.appendChild(newElement);
parent.replaceChild(otherElement,newElement);

//write
// document.write('123456');

//Event listener

const password = document.getElementById('password');
const btn = document.getElementById('show');

btn.addEventListener('click',()=>{
    password.setAttribute('type','text');
});
// btn.addEventListener('click',()=>{
//     password.setAttribute('type','password');
// })

//todo list

const todo = document.createElement('ul');
const parentToDolIst = document.getElementsByClassName('toDoList');
parentToDolIst.appendChild(li);
parentToDolIst.appendChild(li);
parentToDolIst.appendChild(li);


















