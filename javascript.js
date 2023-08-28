const gridContainer = document.getElementById('gridContainer');
//console.log(gridContainer);

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('id','rowgrid');
    for (let j = 0; j<16; j++) {
        const gridItem = document.createElement('div');
        gridItem.setAttribute('id','itemgrid');
        gridRow.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRow);
}
    
const items = Array.from(document.querySelectorAll('#itemgrid'));
let isLeftClicking = false;

items.forEach((item) => {
    item.addEventListener('mousedown', (e) => {
        if (e.button === 0) { // Check if left mouse button is clicked (button code 0)
            isLeftClicking = true;
            const randomColor = getRandomColor();
            item.style.backgroundColor = randomColor;
        }
    });

    item.addEventListener('mousemove', () => {
        if (isLeftClicking) {
            const randomColor = getRandomColor();
            item.style.backgroundColor = randomColor;
        }
    });

    item.addEventListener('mouseup', () => {
        isLeftClicking = false;
    });
});

function getRandomColor() {
    let color = '#000000';
    return color;
};

const clrbtn = document.querySelector('#clear');
//console.log(clrbtn);

clrbtn.addEventListener('click', () => {
    items.forEach((item) => {
        item.style.backgroundColor = '#ffdab9';
    })
})

