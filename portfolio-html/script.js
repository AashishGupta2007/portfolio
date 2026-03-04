// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default jump

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if(name === '' || email === '') {
        e.preventDefault();
        alert('Please fill in your name and email!');
    }
});