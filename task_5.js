let length=4,width=5;

function areRectangle(length,width){
    console.log("Standard Function Area (Default 5x4):",length*width);
    // if we declare here and use outside the block for arrow fxn it gives reference error
    // let alength=10,awidth=3;
}

let arrow =(alength,awidth) => {
    console.log("Arrow Function Area (Custom 10x3):",alength*awidth);
}

areRectangle(length,width);
arrow(10,3);