let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "../assets/images/light.svg";
  } else {
    this.firstElementChild.src = "../assets/images/light.svg";
  }
  document.body.classList.toggle("light");
});