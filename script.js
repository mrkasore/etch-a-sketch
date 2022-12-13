let container = document.querySelector(".container");
let btn = document.querySelector('.reset');
let x = 16;


let colorBrush;
const redBtn = document.querySelector('#red');
const rgbBtn = document.querySelector('#rgb');
const eraserBtn = document.querySelector('#eraser');

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        container.insertAdjacentHTML('beforeend', '<div class="row">');
        let x = document.querySelectorAll('.row')
        for (let j = 0; j < num; j++) {
            x[i].insertAdjacentHTML('beforeend', '<div class="column">');
        }
    }
    moveMouse();
}

function removeGrid(num) {
    for (let i = 0; i < num; i++) {
        let x = document.querySelector('.row');
        x.remove();
    }
}


function moveMouse(clr) {
    let col = document.querySelectorAll(".column");

    col.forEach(c => c.addEventListener('mouseout', function(e) {

        if (colorBrush === 'rgb') {
            e.target.style.background = `rgb(${getRandomInt(250)}, ${getRandomInt(250)}, ${getRandomInt(250)}`;
        } else if (colorBrush === 'red') {
            e.target.style.background = 'red';
        } else if (colorBrush === 'eraser') {
            e.target.style.background = 'aquamarine';
        }
    }));
}

function reset() {
    btn.addEventListener('click', function(e) {
        removeGrid(x);
        x = prompt("Type a number of squares per side for the new grid (maximum of 100)", 16);
        if (x > 100) x === 100;
        createGrid(x);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


redBtn.addEventListener('click', function(e) {
    colorBrush = 'red';
});


rgbBtn.addEventListener('click', function(e) {
    colorBrush = 'rgb'; 
});

eraserBtn.addEventListener('click', function(e) {
    colorBrush = 'eraser';
});


reset();

createGrid(x);
