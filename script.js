const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-links");


toggleBtn.addEventListener("click", () => {
  if (navBar.classList.contains("show")) {
    navBar.classList.remove("show");
    toggleBtn.src = "./images/icon-hamburger.svg"
  } else {
    navBar.classList.add("show")
    toggleBtn.src = "./images/icon-close.svg"
  }
})