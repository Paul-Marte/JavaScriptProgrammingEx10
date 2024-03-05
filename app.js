// Create a div tag
const myDiv = document.createElement('div');

// Set attributes
myDiv.setAttribute('id', 'newDiv');
myDiv.setAttribute('class', 'box');

// Create a text node
const divContent = document.createTextNode('We are creating a div');

// Add text node to div
myDiv.appendChild(divContent);

// Append the div to the body
document.body.appendChild(myDiv);

const newPara = document.createElement('p');
newPara.innerText = 'This is my new paragraph';
myDiv.appendChild(newPara);

const myButton = document.createElement('button');
myButton.innerText = 'Click me';
myButton.classList.add('myButton');

myDiv.insertBefore(myButton, newPara);

const p = document.createElement('p');
myDiv.appendChild(p);

myButton.addEventListener('click', () => {
    colourChange();
});

function colourChange() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    myDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    p.innerText = `rgb(${r},${g},${b})`;
}

const coordDiv = document.createElement('div');
document.body.appendChild(coordDiv);

myDiv.addEventListener('mousemove', evt => {
    coordDiv.innerText = `Mouse X: ${evt.clientX} Mouse Y: ${evt.clientY}`;
    colourChange();
});
