import "../styles/style.css";

const homeSection = document.querySelector(".home");

const hamburgerMenuButton = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeMenuButton = document.querySelector(".close-menu-button");
const menuLinks = dropdownMenu.querySelector("ul");

function openMenu(e) {
  e.stopPropagation();
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

// Add visibility to home section shortly after page load
window.addEventListener("load", () => {
  homeSection.classList.add("visible");
})
