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
    