function sendMessage() {
  let userMessage = document.getElementById('userInput').value;
  if (userMessage.trim() !== '') {
    // Display user message
    displayMessage(userMessage, 'user');

    // Respond with chatbot message
    let botResponse = getBotResponse(userMessage);
    displayMessage(botResponse, 'chatbot');
  }
  document.getElementById('userInput').value = ''; // Clear input field
}

function displayMessage(message, sender) {
  let chatbox = document.getElementById('chatbox');
  let messageElement = document.createElement('div');
  messageElement.classList.add(sender + '-message');
  messageElement.innerHTML = `<p>${message}</p>`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

function getBotResponse(userMessage) {
  let lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes('name')) {
    return 'I am CyberCuddle_Mulo, your friendly chatbot!';
  } else if (lowerMessage.includes('where are you from')) {
    return 'I was created by a South African software developer!';
  } else if (lowerMessage.includes('what is your purpose')) {
    return 'I help users with answering questions and offering assistance!';
  } else if (lowerMessage.includes('help')) {
    return 'You can ask me about my name, where I am from, or what I do!';
  } else {
    return "I'm sorry, I didn't understand that. Try asking something else!";
  }
}
