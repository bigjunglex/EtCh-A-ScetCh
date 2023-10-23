const field = document.getElementById("ground");
const size = document.getElementById("size");
const color = document.getElementById("rgb");
const noColor = document.getElementById("black");
const colorState = document.getElementById("state");
let rgbMode = false;
const gridMaker = function(side, color) {
    let containerSize = 480 * 480;
    let sideSize = Math.sqrt(containerSize / (side ** 2));
    
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    };
    
    for (let i = 0; i < (side **  2); i++) {
        let sektor = document.createElement("div");
        sektor.style.background = "white"
        sektor.style.height = `${sideSize - 2}px`;
        sektor.style.width = `${sideSize - 2}px`;
        sektor.style.border = "solid 1px";
        if (!color){
            sektor.addEventListener("mouseover", (event) => {
                event.target.style.background = "black";
            });
        } else {
            let rgbRandom = Math.floor(Math.random()*16777215).toString(16);
            sektor.addEventListener("mouseover", (event) => {
                event.target.style.background = "#" + rgbRandom;
            });
        }
        field.appendChild(sektor)
    };

};

color.addEventListener("click", () => {
    rgbMode = true;
    colorState.textContent = "RGB"
});
noColor.addEventListener("click", () => {
    rgbMode = false;
    colorState.textContent = "Black";
});


size.addEventListener("click", function() {
    let gridSide = prompt("Enter number of squares per side");
    if (gridSide > 64) {
        alert("Number of squares per side should not be over 64");
    } else {
        gridMaker(gridSide, rgbMode);
    }
});
