const orb = document.getElementById('orb');
const messageElement = document.getElementById('message');

const messages = [
    "if ( 1 + 1 == 1 ){ e8z = true; }",
    "They are watching.",
    "Do you see it?",
    "Trust no one.",
    "The key is hidden.",
    "Nothing is real.",
    "Everything is connected.",
    "Decode the truth.",
    "Time is running out.",
    "Find the pattern.",
    "Behind the curtain.",
    "Who are you?",
    "Are you ready?",
    "This is just the beginning.",
    "Where is the answer?",
    "They are close.",
    "This too will change.",
    "Return again."
];

let messageIndex = 0;

orb.addEventListener('click', () => {
    showMessage(messages[messageIndex]);
    messageIndex = (messageIndex + 1) % messages.length;
});

function showMessage(message) {
    messageElement.textContent = message;
    messageElement.style.opacity = 1;
    
    setTimeout(() => {
        messageElement.style.opacity = 0;
    }, 1500); // Display message for 1.5 seconds
}
