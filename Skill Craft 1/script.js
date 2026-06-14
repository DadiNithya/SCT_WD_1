// Navbar scroll effect

window.addEventListener("scroll", function(){

  const navbar = document.getElementById("navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }
  else{
    navbar.classList.remove("scrolled");
  }

});


// Mobile menu toggle

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});