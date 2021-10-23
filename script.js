// code for the navbar code

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".pullmyfinger").forEach((pull) => {
    pull.classList.toggle("sparklebangs");
  });
});

// code for the strength explanation fill

document.querySelectorAll(".explanation-btn").forEach((boop) => {
  boop.addEventListener("click", () => {
    boop.classList.toggle("schpadoinkle");
    boop.nextElementSibling.classList.toggle("schpadoinkle");
  });
});

// code for dynamic changing year

const newYear = document.querySelector(".year");
const bornMe = new Date().getFullYear();
newYear.textContent = bornMe;
