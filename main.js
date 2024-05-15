const elemCapture = (id) => {
  return document.getElementById(id);
}

const hamburger = elemCapture("hamburger");
const navigationMenu = elemCapture("nav-menu");

hamburger.addEventListener("click", function toggle() {
  if (navigationMenu.style.display === "flex") {
    navigationMenu.style.display = "none";
    return;
  } else {
    navigationMenu.style.display = "flex";
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 900) {
    navigationMenu.style.display = "flex";
    hamburger.style.display = "none";
  }

  if (window.innerWidth < 900) {
    navigationMenu.style.display = "none";
    hamburger.style.display = "block";
  }
});