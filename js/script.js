
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});


// document.getElementsByClassName("button-overlay").onclick = function () {

//   // document.getElementById("button-overlay").style.display = "none";
//   // document.getElementById("button-hide").style.display = "none";
//   // document.getElementById("revealed").style.display = "initial";

//   console.log("Hii");
// }

document.querySelectorAll('.button-overlay').forEach(item => {
  item.addEventListener('click', event => {
    var allBtn = document.querySelectorAll(".button-overlay.button-hide.revealed");

    for (var i = 0; i <= allBtn.length; i++) {
      document.querySelectorAll(".button-overlay")[i].style.display = "none";
      document.querySelectorAll(".button-hide")[i].style.display = "none";
      document.querySelectorAll(".revealed")[i].style.display = "initial";
    };
  });
});