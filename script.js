let btnchange = document.getElementById("btn");

function backgroundChange(){
    let val = "1234567890ABCDEF";
    let hex = "#";

    for(let i=0; i<6; i++){
        hex = hex + val[Math.floor(Math.random()*16)];
    }
    return hex;
    
}
console.log(backgroundChange());

function changeColor(){
    document.body.style.backgroundColor = backgroundChange();
}

btnchange.addEventListener("click", changeColor);

// btnchange.onclick{
//     alert()
// }

// let buttonOne = document.getElementById("btn");
// buttonOne.onclick = functionOne();

// const functionOne = alert("Hello! I am an alert box!!");

