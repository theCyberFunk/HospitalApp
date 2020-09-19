const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-dropdown");

const drop_menu = () => {
    menu.classList.toggle("hidden");
}
burger.addEventListener('click', drop_menu);
// navbar dropdown end




// users
var icons_u = document.querySelectorAll(".fa-user");
var gender = document.querySelectorAll("#gender");
var dob = document.querySelectorAll("#dob");
var loc = document.querySelectorAll("#location");

function showdetails_u (){
    for(let i=0; i<icons_u.length; i++){
            icons_u[i].addEventListener("click", ()=>{
                gender[i].classList.toggle("hidden");
                dob[i].classList.toggle("hidden");
                loc[i].classList.toggle("hidden");
            })
    }
}
showdetails_u();





// messages
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



// appointments
var icons_a = document.querySelectorAll(".fa-calendar-check");
var date = document.querySelectorAll("#date");
var details = document.querySelectorAll("#details");
var image = document.querySelectorAll(".appointment #image");

function showdetails_a (){
    for(let i=0; i<icons_a.length; i++){
            icons_a[i].addEventListener("click", ()=>{
                date[i].classList.toggle("hidden");
                details[i].classList.toggle("hidden");
                image[i].classList.toggle("hidden");
            })
    }
}
showdetails_a();