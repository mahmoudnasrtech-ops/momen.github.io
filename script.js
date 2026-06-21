// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Welcome message
console.log("Welcome to Mo'men IT Portfolio");

// Mobile Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", ()=>{
        navLinks.classList.toggle("active");
    });

}

