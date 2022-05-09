const countDiv = document.querySelector(".count");
const prev = document.querySelector(".prev");
const reset = document.querySelector(".reset");
const next = document.querySelector(".next");
const btn = document.querySelector(".buttons");

// First Method

// prev.addEventListener("click", () => {
//   countDiv.innerHTML--;
// });
// reset.addEventListener("click", () => {
//   countDiv.innerHTML = 0;
// });
// next.addEventListener("click", () => {
//   countDiv.innerHTML++;
// });

// Second Method
btn.addEventListener("click", (button) => {
  if (button.target.classList.contains("prev")) {
    countDiv.innerHTML--;
    changeColor();
  }
  if (button.target.classList.contains("reset")) {
    countDiv.innerHTML = 0;
    changeColor();
  }
  if (button.target.classList.contains("next")) {
    countDiv.innerHTML++;
    changeColor();
  }
});

function changeColor() {
  if (countDiv.innerHTML < 0) {
    countDiv.style.color = "red";
  }
  if (countDiv.innerHTML == 0) {
    countDiv.style.color = "green";
  }
  if (countDiv.innerHTML > 0) {
    countDiv.style.color = "yellow";
  }
}
