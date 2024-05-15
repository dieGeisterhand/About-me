const yearDropdowns = document.querySelectorAll(".year");
const monthElements = document.querySelectorAll(".month");
const littleButtons = document.querySelectorAll(".open-close");

let selectedYear;

for (let i = 0; i < yearDropdowns.length; i++) {
  yearDropdowns[i].addEventListener("click", (event) => {
    const clickedElement = event.target;
    selectedYear = parseInt(clickedElement.textContent);
    console.log(selectedYear);

    if (monthElements[i].style.display === "none") {
      monthElements[i].style.display = "flex";
      littleButtons[i].innerHTML = "∧";
    } else {
        monthElements[i].style.display = "none";
        littleButtons[i].innerHTML = "∨"
    }
  });
}

let monthOption;

for (let i = 0; i < monthElements.length; i++) {
  monthElements[i].addEventListener("click", (event) => {
    const clickedElement = event.target;
    monthOption = clickedElement.innerHTML.toLowerCase();
    console.log(monthOption + selectedYear);

    updateIframe(monthOption, selectedYear);
  });
}

function updateIframe(monthOption, selectedYear) {
  const iframe = document.getElementById("iframe");

  console.log(`Month: ${monthOption}`);
  console.log(`Year: ${selectedYear}`);


  if (monthOption === "july" && selectedYear === 2024) {
    console.log("Setting iframe src to jeyfrem.com");
    iframe.setAttribute("src", "https://www.jeyfrem.com/");
  } else if (monthOption === "may") {
    console.log("Setting iframe src to google.com");
    iframe.setAttribute("src", "https://www.google.com/");
  } else if (monthOption === "july" && selectedYear === 2025) {
    console.log("Setting iframe src to w3schools.com");
    iframe.setAttribute("src", "https://www.w3schools.com/");
  } else {
    console.log("No match. Month Option:", monthOption, "Selected Year:", selectedYear);
    iframe.setAttribute("src", "");
  }
}