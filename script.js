document.addEventListener('DOMContentLoaded', () => {
    const glitchElement = document.querySelector('.glitch');
    const messages = [
        "Do you see it?",
        "Reality is an illusion.",
        "Curiosity brought you here.",
        "The truth is out there.",
        "Follow the signs."
    ];

    let messageIndex = 0;

    glitchElement.addEventListener('click', () => {
        // Change the text on click
        messageIndex = (messageIndex + 1) % messages.length;
        glitchElement.textContent = messages[messageIndex];
        glitchElement.setAttribute('data-text', messages[messageIndex]);
    });
});
