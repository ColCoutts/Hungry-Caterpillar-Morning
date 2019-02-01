const colors = [
    'blue',
    'red',
    'purple',
    'grey',
];

const colorBlocks= document.getElementById('color-blocks');
const blockCanvas = document.getElementById('block-canvas');


for(let index = 0; index < colors.length; index++) {
    let color = colors[index];

    const colorBlock = document.createElement('button');
   // colorBlock.value = color; // not necessary for these purposes
    colorBlock.classList.add('color-block', color);
    colorBlock.textContent = color;

    colorBlock.addEventListener('click', function(){
        paint(color);
    });

    colorBlocks.appendChild(colorBlock);
}

function paint(color) {
    const colorPiece = document.createElement('span');
    colorPiece.classList.add('color-piece', color);

    blockCanvas.appendChild(colorPiece);
}

function circleTransform(color){
    const selector = '.color-piece' + color;
    const colorBlocks = document.querySelectorAll(selector);

    for(let index = 0; index < colorBlocks.length; index++) {
        colorBlocks[index].classList.add('transform');
    }
}


