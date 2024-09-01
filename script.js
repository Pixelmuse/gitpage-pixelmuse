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

// Function to generate random position avoiding the orb area
function getRandomPosition() {
    const orbRect = orb.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    let x, y;
    do {
        x = Math.random() * (windowWidth - 200); // Consider message width as 200px
        y = Math.random() * (windowHeight - 100); // Consider message height as 100px
    } while (x > orbRect.left - 200 && x < orbRect.right + 200 && 
             y > orbRect.top - 100 && y < orbRect.bottom + 100);

    return { x, y };
}

orb.addEventListener('click', () => {
    const { x, y } = getRandomPosition();
    messageElement.style.left = `${x}px`;
    messageElement.style.top = `${y}px`;

    showMessage(messages[messageIndex]);
    messageIndex = (messageIndex + 1) % messages.length;
});

function showMessage(message) {
    messageElement.textContent = message;
    messageElement.style.opacity = 1;

    setTimeout(() => {
        messageElement.style.opacity = 0;
    }, 300); // Display message for 0.3 seconds (quick flash)
}

// Remove flash effect after it runs once
setTimeout(() => {
    document.getElementById('flash').remove();
}, 500);
