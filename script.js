const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-links");
const pop = document.querySelector(".pop")

toggleBtn.addEventListener("click", () => {
  if (navBar.classList.contains("show") && pop.classList.contains("show")) {
    navBar.classList.remove("show");
    pop.classList.remove("show")
    toggleBtn.src = "./images/icon-hamburger.svg"
  } else {
    navBar.classList.add("show")
    pop.classList.add("show")
    toggleBtn.src = "./images/icon-close.svg"
  }
})