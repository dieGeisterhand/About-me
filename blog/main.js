const year = document.getElementById("year");
const month = document.getElementById("month");

year.addEventListener("click", () => {
  if (month.style.display === "none") {
    month.style.display = "flex";
    return;
  } else {
    month.style.display = "none";
  }
})