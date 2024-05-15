const yearDropdown = document.getElementById("year");
const monthElement = document.getElementById("month");
const littleButton = document.getElementById("open-close");

yearDropdown.addEventListener("click", () => {
  if (monthElement.style.display === "none") {
    monthElement.style.display = "flex";
    littleButton.innerHTML = "∧";
    return;
  } else {
    monthElement.style.display = "none";
    littleButton.innerHTML = "∨"
  }
})

const retrieveMonth = (clickedElement) => {
  const monthOption = clickedElement.innerHTML.toLowerCase();
  return monthOption;
}


const iframeContent = () => {
  const iframe = document.getElementById("iframe");
  const month = retrieveMonth(document.querySelector(".month-selection"));
  
  if (month === "may") {
    iframe.setAttribute("src", "https://www.jeyfrem.com/");
  }
};