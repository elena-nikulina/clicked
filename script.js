const btn = document.querySelector('#btn');
let textInput = document.querySelector('#text');
let square = document.querySelector('#square');
let eBtn = document.querySelector('#e_btn');
let range = document.querySelector('#range');
let rangeSpan = document.querySelector('#range-span');
let circle = document.querySelector('#circle');

btn.addEventListener('click', function() {
    if (textInput !== '') {
        square.style.backgroundColor = textInput.value;
    }
});

eBtn.style.display = 'none';
rangeSpan.textContent = 150;

range.addEventListener('input', function() {
    circle.style.width = (150*range.value/100) + '%';
    circle.style.height = (150*range.value/100) + '%';
    circle.style.maxWidth = '100%';
    circle.style.maxHeight = '100%';
});


