<script>
    // Function to send message and get chatbot reply
    function sendMessage() {
        const inputField = document.getElementById('chatbot-input');
        const message = inputField.value.trim();

        if (message !== "") {
            // Display user message
            const userMessage = document.createElement('div');
            userMessage.classList.add('user-message');
            userMessage.textContent = message;
            document.getElementById('chatbot-messages').appendChild(userMessage);

            // Get and display bot reply
            const botMessage = document.createElement('div');
            botMessage.classList.add('bot-message');
            botMessage.textContent = getBotReply(message);
            document.getElementById('chatbot-messages').appendChild(botMessage);

            // Scroll to bottom
            document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;

            // Clear input field
            inputField.value = '';
        }
    }

    // Function to return bot's reply
    function getBotReply(message) {
        // Simple responses (you can expand this)
        const replies = {
            "hi": "Hello! How can I assist you today?",
            "hello": "Hi there! What can I do for you?",
            "how are you": "I'm just a bot, but I'm doing great! How about you?",
            "what is your name": "I'm your personal assistant chatbot!",
            "bye": "Goodbye! Have a great day!"
        };

        // Default response if message doesn't match
        return replies[message.toLowerCase()] || "Sorry, I didn't understand that. Could you rephrase?";
    }
</script>

