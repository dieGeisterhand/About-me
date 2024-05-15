const year = document.getElementById("year");
const month = document.getElementById("month");
const littleButton = document.getElementById("open-close");

year.addEventListener("click", () => {
  if (month.style.display === "none") {
    month.style.display = "flex";
    littleButton.innerHTML = "∧";
    return;
  } else {
    month.style.display = "none";
    littleButton.innerHTML = "∨"
  }
})