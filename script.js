const container = document.querySelector(".container");
const open = document.getElementById("open");
const close = document.getElementById("close");
const circle = document.querySelector(".circle");
open.addEventListener("click", function () {
  container.classList.add("show-nav");
  circle.classList.add("rotate");
});
close.addEventListener("click", function () {
  container.classList.remove("show-nav");
  circle.classList.remove("rotate");
});
