// grab DOM elements

// set event listeners
function sayHello(name){
    console.log(`Hello ${name}`);
    console.log('Its a beautiful day');
    console.log('How goes it?');
}
sayHello('ryan');

const updateBtn = document.getElementById('update');
    updateBtn.addEventListener('click', () => {
const nameInput = document.getElementById('input');
    console.log('I am clicking on the button');
const nameElem = document.getElementById('name');
      nameElem.textContent=nameInput.value;
})




