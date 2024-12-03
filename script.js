const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide the navigation menu
    navLinks.classList.toggle('active');

    // Hide the hamburger button once clicked
    hamburger.style.display = 'none';
});

// Close the menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Hide the hamburger menu and reset the button display
        navLinks.classList.remove('active');
        hamburger.style.display = 'block'; // Show hamburger again
    });
});
