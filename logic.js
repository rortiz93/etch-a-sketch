const container = document.getElementById('container');

function makeGrid(num=16){
    let maxCells = num*num +1
    for (let i=1; i < maxCells; i++){
        const div = document.createElement('div');
        div.classList.add("grid");
        container.appendChild(div);
    
    
    }

}


function mouseOver() {
    const divs = document.getElementsByClassName('grid');


    console.log(divs);
    
 
    Array.from(divs).forEach(function(element){
        element.addEventListener("mouseover", (event) => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
            if (!event.target.style.backgroundColor){
                
                event.target.style.backgroundColor = rgb;
            }else{
                
                let currentRGB = event.target.style.backgroundColor;
                currentRGB = currentRGB.replace(/[^\d,]/g, '').split(',');
                const newRGB = currentRGB.map((color) => {
                    const tempPercent = color/10;
                    color = color - tempPercent;
                    return color;
                });
                event.target.style.backgroundColor = `rgb(${newRGB[0]}, ${newRGB[1]}, ${newRGB[2]})`;
                
            }
            
        });
    });

}
makeGrid();
mouseOver();
const btn = document.querySelector('button');



btn.addEventListener('click', (event) => {
    let newGridSize = prompt("how large should the new grid be? (max 100)");
    while (newGridSize > 100){
       newGridSize = prompt("please enter a grid cell amount that is 100 or less");
    }
    document.getElementById('container').innerHTML = '';

    makeGrid(newGridSize);
    mouseOver();
    console.log(newGridSize);
})