//Select DOM Items (Document Object Model)
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(
  ".nav-items"
); /* Links Home, About Me, My Work, How To Reach Me */

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close"); /* Will add this class */
    menu.classList.add("show"); /* Will add this class */
    menuNav.classList.add("show"); /* Will add this class */
    menuBranding.classList.add("show"); /* Will add this class */
    navItems.forEach(item =>
      item.classList.add("show")
    ); /* each of the navItems add show class */

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close"); /* Will remove this class */
    menu.classList.remove("show"); /* Will remove this class */
    menuNav.classList.remove("show"); /* Will remove this class */
    menuBranding.classList.remove("show"); /* Will remove this class */
    navItems.forEach(item =>
      item.classList.remove("show")
    ); /* each of the navItems remove show class */

    //Set Menu State
    showMenu = false;
  }
}
