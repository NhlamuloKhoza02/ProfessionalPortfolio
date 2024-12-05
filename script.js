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
   // Select the clear chat button by its id
const chatbotClear = document.getElementById('chatbot-clear');
const chatbotBody = document.getElementById('chatbot-body');

// Function to clear the chat
chatbotClear.addEventListener('click', () => {
    // Clear the chat body
    chatbotBody.innerHTML = '';
    // Optionally, reset the initial greeting message
    addBotResponse("Hi, My name is CyberC_Mulo! How can I help you today?");
});

// Close chatbot
const chatbotClose = document.getElementById('chatbot-close');
const chatbot = document.getElementById('chatbot');
const chatbotToggle = document.getElementById('chatbot-toggle');

chatbotClose.addEventListener('click', () => {
    chatbot.style.display = 'none';
    chatbotToggle.style.display = 'flex';
});
