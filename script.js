// code for the navbar code

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".pullmyfinger").forEach((pull) => {
    pull.classList.toggle("sparklebangs");
  });
});
