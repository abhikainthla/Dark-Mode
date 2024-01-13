let text = document.getElementById("text");
let container = document.querySelector("body");
let toggle = document.querySelector("input");
toggle.addEventListener('click',() => {
    if (toggle.checked) {
        // Dark Mode
        text.style.color="white";
        container.style.backgroundColor ="black";
        } else{
            // Light Mode
            text.style.color="#383d42"
            container.style.backgroundColor ="white";
        }
    
})