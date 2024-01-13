let text = document.getElementById("text");
let container = document.querySelector("body");
let toggle = document.querySelector("input");
toggle.addEventListener('click',() => {
    container.style.backgroundColor ="black";
    if(text.style.color != "white"){
        text.style.color="white";
    }
    else{
        text.style.color="black";
        container.style.backgroundColor ="white";
    }
})