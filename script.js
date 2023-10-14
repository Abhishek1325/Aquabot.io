// Replace this with actual API integration for your AI chatbot
function sendMessageToChatbot(message) {
    return "Chatbot response: " + message;
}

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessageToChat(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(isUser ? 'user-message' : 'chatbot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        addMessageToChat(userMessage, true);

        // Call your chatbot API here
        const chatbotResponse = sendMessageToChatbot(userMessage);

        addMessageToChat(chatbotResponse, false);

        userInput.value = '';
    }
});