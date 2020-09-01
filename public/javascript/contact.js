const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-dropdown");

const drop_menu = () => {
    menu.classList.toggle("hidden");
}
burger.addEventListener('click', drop_menu);
// navbar dropdown end


// Initialize and add the map
function initMap() {
    var noida = {lat: 28.5514, lng: 77.3511};
    var map = new google.maps.Map(
        document.querySelector('.map'), {zoom: 12, center: noida});
    var marker = new google.maps.Marker({position: noida, map: map});
  }