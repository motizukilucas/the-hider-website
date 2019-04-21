console.log('Hello World!');

// Hamburguer animation JS
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

window.onload = function() {
    console.log($("html"));
    $("html").css("opacity", "1");
  }
