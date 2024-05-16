const res = document.getElementById('hexColor');
const mainSec = document.getElementsByClassName('main-section');


//color Generator 
function color(){
    const red = Math.floor(Math.random() * 255);
    const yellow = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const colorObj = {
        rgbColor : `rgb(${red},${yellow},${blue})`,
        hexColor : `#${red.toString(16)}${yellow.toString(16)}${blue.toString(16)}`
    }
    return colorObj;
}


//hex color generator
function genColor(){
    let hexColor = color();
    console.log(hexColor.hexColor);
    res.innerHTML = hexColor.hexColor;
    mainSec[0].style.background = hexColor.hexColor;
}



//rgb color generator
function genHexColor(){
    let rgbColor = color();
    res.innerHTML = rgbColor.rgbColor;
    mainSec[0].style.background = rgbColor.rgbColor;
}

//copy color code by clicking copy button
function copyColor(){
    const tooltip = document.getElementById('tooltip');
    navigator.clipboard.writeText(res.innerHTML);
    tooltip.innerHTML = `Copied : ${res.innerHTML}`;
}

//toest message dismis
function tostMess(){
    tooltip.innerHTML = `Copy To Clipboard`;
    }