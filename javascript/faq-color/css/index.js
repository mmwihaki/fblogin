let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll('.answer');


questions.forEach(question => {
    question.addEventListener('click', function(){
        let answer = question.nextElementSibling;
        let span = question.children[0];
        if(answer.style.display === 'block'){
            answer.style.display = 'none';
            span.textContent = '+';
        } else {
            answers.forEach(answer => answer.style.display = 'none')
            questions.forEach(question => question.children[0].textContent = '+');
            answer.style.display = 'block';
            span.textContent = 'x';
        }
    })
});


let body = document.querySelector('#body');
let colors = document.querySelectorAll('.color')
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let yellow = document.querySelector('#yellow');
let title = document.querySelector('.title')


red.addEventListener('click', function onClick(){
    body.style.backgroundColor = 'red'
});

green.addEventListener('click', function onClick(){
    body.style.backgroundColor = 'green'
});

yellow.addEventListener('click', function onClick(){
    body.style.backgroundColor = 'yellow'
    title.style.color = 'black'
});



// colors.forEach(color => {
//     color.addEventListener('click', function () {
//         if (red.style.backgroundColor === 'red') {
//             body.style.backgroundColor = 'red';
//         } else if (
//             green.style.backgroundColor === 'green') {
//             body.style.backgroundColor = 'green';
//         } else if (
//             yellow.style.backgroundColor === 'yellow') {
//             body.style.backgroundColor = 'yellow';
//         } else {
//             body.style.backgroundColor = 'black'
//         }
//     })
// })