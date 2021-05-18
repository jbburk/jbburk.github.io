const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    let chapter = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = chapter;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = '\u274c';
    list.appendChild(listItem);

    deleteBtn.addEventListener('click', function (e) {
        list.removeChild(listItem);
    } )

    input.focus();
} )