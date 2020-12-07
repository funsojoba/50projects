let open = document.getElementById("open")
let close = document.getElementById("close")
let body = document.querySelector(".body");
let buttons = document.querySelector(".button");

open.addEventListener("click", ()=>{
    body.classList.add("rotate");
    buttons.classList.add("turn");

})

close.addEventListener("click", ()=>{
    body.classList.remove("rotate");
    buttons.classList.remove("turn")
})