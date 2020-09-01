const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-dropdown");

const drop_menu = () => {
    menu.classList.toggle("hidden");
}
burger.addEventListener('click', drop_menu);
// navbar dropdown end



var icons = document.querySelectorAll(".info .fas");
var details = document.querySelectorAll(".info main");


function showdetails (){
    for(let i=0; i<icons.length; i++){
            icons[i].addEventListener("click", ()=>{
                details[i].classList.toggle("hidden");
                icons[i].classList.toggle("fa-arrow-circle-down");
                icons[i].classList.toggle("fa-arrow-circle-up");
            })
    }
}
showdetails();