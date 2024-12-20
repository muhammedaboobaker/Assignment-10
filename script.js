// First Question
document.getElementById('header').innerHTML= 'Text Changed!';


// Second Question
const button = document.getElementById('changeTextButton');

button.addEventListener('click', function(){
    document.querySelectorAll('.text').forEach(element => {
        element.style.color = 'blue';
    });
} )

// Third Question
const listItem = document.querySelectorAll('.list-item');
listItem.forEach(element => {
        console.log(element.textContent);
});

// Fourth Question
const FirstListItem = document.querySelector('.list-item');

FirstListItem.style.backgroundColor = 'yellow';

// Fifth Question
listItem.forEach(element => {
    element.style.color = 'green';
});