let text = document.getElementById("text");
let container = document.querySelector("body");
let toggle = document.querySelector("input");
toggle.addEventListener('click',() => {
    container.style.backgroundColor ="white";
    if(text.style.color === "white"){
        text.style.color="black";
    }
    else{
        text.style.color="white";
        container.style.backgroundColor ="black";
    }
})