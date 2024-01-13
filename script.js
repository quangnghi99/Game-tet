function sendLixi() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        var messagesContainer = document.getElementById('messages');
        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.className = 'falling-lixi';
        messagesContainer.appendChild(newMessage);

        // Change class after adding falling-lixi to trigger the new background image
        setTimeout(function () {
            newMessage.classList.add('playboi-lixi');
        }, 500); // Change after 500ms, adjust as needed

        // Clear input field after sending
        messageInput.value = '';
    }
}