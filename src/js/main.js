//** === Variables === */
const navMobile = document.querySelector("#navMobile"); 
const displayMobile = document.querySelector("#displayMobile");
const navMenu = document.querySelector("#idNavigation"); 
const btnMenu = document.querySelectorAll(".menu__list--nav");


document.addEventListener('DOMContentLoaded', () => { 
   btnMenu.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
      e.preventDefault();
      console.log("Click Menu");
     });
   });
}); 