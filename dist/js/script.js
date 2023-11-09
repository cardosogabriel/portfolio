// Get the button
let myButton = document.getElementById("scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.classList.remove("opacity-0");
  } else {
    myButton.classList.add("opacity-0");
  }
}