// Smooth Scroll to Sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}
// Select the logo element
const logo = document.getElementById('logo');

// Add click event listener to reload the page
logo.addEventListener('click', () => {
    location.reload(); // Reloads the current page
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been received.`);
        event.target.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
