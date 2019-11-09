//EXAMINE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.title); //view the title of the page
// console.log(document.URL); // view the URL
// console.log(document.doctype); 
// console.log(document.all); //view everything
// console.log(document.forms);

//GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));

//GET ELEMENTS BY CLASS NAME

// let items = document.getElementsByClassName('list-group-item');
// //change item 2 name and background color
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'heyyyy';
// // items[1].style.backgroundColor = 'green';

// //change all items in class using for loop

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'blue';
// }

// GET ELEMENTS BY TAG

// let li = document.getElementsByTagName('li');
// //change item 2 name and background color
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'helloooo';
// // items[1].style.backgroundColor = 'green';

// //change all items in class using for loop

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightblue';
// }

// QUERY SELECTOR

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// let input = document.querySelector('input');
// input.value = 'hello world';
//change the button name text from submit to send.
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';
// //change text color of first li
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// //change color of last li text
// let item4 = document.querySelector('.list-group-item:last-child');
// item4.style.color = 'blue';

// //change text color of 2nd li

// let item2 = document.querySelector('.list-group-item:nth-child(2)');
// item2.style.color = 'green';

// //change 3rd li text color
// let item3 = document.querySelector('.list-group-item:nth-child(3)');
// item3.style.color = 'purple';

//QUERY SELECTOR ALL

// let titles = document.querySelectorAll('.title');
// console.log(titles);

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = 'red';
// }


////####TRAVERSE THE DOME#####///////

// let itemList = document.querySelector('#items');
// //PARENT NODE///
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// //PARENT ELEMENT///
// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

////CHILD NODES////
// console.log(itemList.childNodes);


// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

//FIRST CHILD

// console.log(itemList.firstChild);

//FIRST ELEMENT CHILD--
//same can be done for last child & last child element

// console.log(itemList.firstElementChild);

/// NEXT SIBLING
// console.log(itemList.nextSibling);

//previous sibling

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green';
// itemList.previousElementSibling.style.color = 'yellow'

// CREATE ELEMENT

// var newDiv = document.createElement('div');
// //ADD CLASS
// newDiv.className='hello';

// //ADD ID
// newDiv.id='hello1';
// //ADD ATTRIBUTE
// newDiv.setAttribute('title', 'Hello Div');

// //CREATE TEXT NODE

// let newDivText = document.createTextNode('Hello World');
// //ADD TEXT TO DIV
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv, h1);

//#### EVENTS #####//


// let button = document.getElementById('button').addEventListener
// ('click', buttonClick);

// function buttonClick(e){
// //     document.getElementById('header-title').textContent= 'Changed';
// //     document.querySelector('#main').style.backgroundColor = 'blue';
// // 
// console.log(e.target);
// console.log(e.target.id);
// }
// let button = document.getElementById('button');
// let box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mouseover', runEvent);

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');
// itemInput.addEventListener('keydown', runEvent);

// function runEvent(e){
// console.log('Event Type: '+ e.type);
// }
///////////////////////////////////////////////


let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//FORM SUBMIT
form.addEventListener('submit', addItem);
//DELET ITEM
itemList.addEventListener('click', removeItem);
//FILTER ITEM
filter.addEventListener('keyup', filterItems);
//ADD ITEM
function addItem(e) {
    e.preventDefault();

    //GET INPUT VALUE

    let newItem = document.getElementById('item').value;

    //CREATE NEW LI/BUTTON ELEMENT
    let button = document.createElement('button');
    let li = document.createElement('li');
    //ADD CLASS
    li.className = 'list-group-item';
    button.className = 'btn btn-danger btn-sm float-right delete';
    //ADD TEXT NODE W/INPUT VALUE
    li.appendChild(document.createTextNode(newItem));
    //APPEND TEXT NODE
    button.appendChild(document.createTextNode('X'));
//APPEND BUTTTON TO LI
li.appendChild(button);
//APPEND LI TO LIST
    itemList.appendChild(li);
}

//REMOVE ITEM
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    //convert to lowercase
    let text = e.target.value.toLowerCase();
    //get list
    let items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display ='none';
        }
    });
}




