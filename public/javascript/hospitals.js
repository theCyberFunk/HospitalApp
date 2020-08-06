const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-dropdown");

const drop_menu = () => {
    menu.classList.toggle("hidden");
}
burger.addEventListener('click', drop_menu);
// navbar dropdown end