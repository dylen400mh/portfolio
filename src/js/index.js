import "../styles/style.css";

const hamburgerMenuButton = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeMenuButton = document.querySelector(".close-menu-button");
const menuLinks = dropdownMenu.querySelector("ul");

function openMenu(e) {
    e.stopPropagation()
  dropdownMenu.classList.add("visible");
}

function closeMenu(e) {
  e.stopPropagation();

  // Allows for smooth transition when closing
  if (dropdownMenu.style.visibility === "visible") {
    setTimeout(() => {
      dropdownMenu.style.visibility = "hidden";
    }, 500);
  }

  dropdownMenu.classList.remove("visible");
}

// Opens menu
hamburgerMenuButton.addEventListener("click", openMenu);

// Prevents clicks on dropdown from closing the menu
dropdownMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Closes menu
menuLinks.addEventListener("click", closeMenu);
closeMenuButton.addEventListener("click", closeMenu);
document.addEventListener("click", closeMenu);
