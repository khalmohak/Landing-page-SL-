// var started = document.getElementById("navbarSupportedContent");

// function display() {
//   started.style.display = "none";
// }

// function inputParallaxBlur() {
//   started.style.borderBottom = "1px solid white";
// }
document.addEventListener("click", function(event) {
  // If user clicks inside the element
  if (event.target.closest(".side-nav")) {
    $(".side-nav").removeClass("open");
  }
});
