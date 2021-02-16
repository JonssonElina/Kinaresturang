


/* När man klickar på knappen så kommer hela menyn att visas */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* Dropdown meny funktionen */
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// säger att när man skrollar så kommer sticky funktionen att köras
window.onscroll = function() {yourFunction()};

// visar nav
var navbar = document.getElementById("navbar");

// visar var navbaren ska vara
var sticky = navbar.offsetTop;

// funktionen som gör så att den blir sticky
function yourFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
