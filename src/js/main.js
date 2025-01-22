var changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", function () {
  changeColor.style.background = "var(--blue-color)";
});

var toggleColor = document.querySelector(".toggle-color");
toggleColor.addEventListener("click", function () {
  if (toggleColor.style.background == "var(--orange-color)") {
    toggleColor.style.background = "var(--red-color)";
  } else {
    toggleColor.style.background = "var(--orange-color)";
  }
});
var trigger = document.querySelector(".trigger");
var target = document.querySelector(".target");
trigger.addEventListener("click", function () {
  target.classList.toggle("is-hidden");
});
var triggerAll = document.querySelector(".trigger-all");
var triggerAllSelf = document.querySelector(".trigger-all-self");
triggerAll.addEventListener("click", function () {
  changeColor.style.background = "var(--blue-color)";
  toggleColor.style.background = "var(--red-color)";
});
triggerAllSelf.addEventListener("click", function () {
  changeColor.style.background = "var(--blue-color)";
  toggleColor.style.background = "var(--red-color)";
  triggerAllSelf.style.background = "var(--green-color)";
});
