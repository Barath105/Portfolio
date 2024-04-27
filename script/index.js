
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.child-2 nav');
    const menuIcon = document.getElementById('menuIcon');

    menuIcon.addEventListener('click', function (event) {
        nav.classList.toggle('show');
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideNav && !isClickOnMenuIcon) {
            nav.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".child-2 nav a");
    const navMenu = document.querySelector(".child-2 nav");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("show");
        });
    });
});



// Load
// Add 'loaded' class to body after 2 seconds
setTimeout(function() {
    document.body.classList.add('loaded');
}, 3000); // 2 seconds delay

// Remove content-hidden class after 2 seconds to reveal the content
setTimeout(function() {
    document.querySelector('.container').classList.remove('content-hidden');
}, 2000); // 2 seconds delay



// FORM


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Further processing like sending the form data to a server can be added here
});


