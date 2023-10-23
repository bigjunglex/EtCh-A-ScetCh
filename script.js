const field = document.getElementById("ground");
const size = document.getElementById("size");
const gridMaker = function(side) {
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
        sektor.addEventListener("mouseover", (event) => {
            event.target.style.background = "black";
        });
        field.appendChild(sektor)
    }

}

size.addEventListener("click", function() {
    let gridSide = prompt("Enter number of squares per side");
    if (gridSide > 64) {
        alert("Number of squares per side should not be over 64");
    } else {
        gridMaker(gridSide);
    }
});

// grid 16x16
// for (let i = 0; i < 256; i++) {
//     let sektor = document.createElement("div");
//     sektor.style.background = "white"
//     sektor.style.height = "28px";
//     sektor.style.width = "28px";
//     sektor.style.border = "solid 1px";
//     sektor.addEventListener("mouseover", (event) => {
//         event.target.style.background = "black";
//     });
//     field.appendChild(sektor)
// };



// sektor.classList.add('sektor');