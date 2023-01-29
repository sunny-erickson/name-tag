// grab DOM elements
//cleaned up This should be different
const updateBtn = document.getElementById('update');
    updateBtn.addEventListener('click', () => {
const nameInput = document.getElementById('input');
    console.log('I am clicking on the button');
const nameElem = document.getElementById('name');
      nameElem.textContent=nameInput.value;
})