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
rangeSpan.textContent = 50 + '%';

range.addEventListener('input', function() {
    circle.style.width = (range.value) + '%';
    circle.style.height = (range.value) + '%';
    circle.style.maxWidth = '100%';
    circle.style.maxHeight = '100%';
    rangeSpan.textContent = (range.value) + '%';
});


