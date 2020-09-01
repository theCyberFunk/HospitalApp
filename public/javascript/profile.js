const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-dropdown");

const drop_menu = () => {
    menu.classList.toggle("hidden");
}
burger.addEventListener('click', drop_menu);
// navbar dropdown end



var icons = document.querySelectorAll(".fa-envelope");
var email = document.querySelectorAll("#email");
var message = document.querySelectorAll("#message");

function showdetails (){
    for(let i=0; i<icons.length; i++){
            icons[i].addEventListener("click", ()=>{
                email[i].classList.toggle("hidden");
                message[i].classList.toggle("hidden");
            })
    }
}
showdetails();