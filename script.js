const orb = document.getElementById('orb');
const messageElement = document.getElementById('message');

const blibVerts = [
    "SORROW", "LIES", "MONEY", "ADS", "INTERFACE", "ACCESS", "ENTRANCE", 
    "ANSWERS", "PLACE", "THINK", "WISDOM", "CHANCE", "ILLUSION", 
    "SHIT", "PROMISES", "COMMITMENT", "OPTIONS", "HYPE", "PRODUCT", 
    "RECEIPT", "LIFE", "FREEDOM", "CLUE", "HOPE", "CONTROL"
];

let messageIndex = 0;

// Function to generate random position avoiding the orb area
function getRandomPosition() {
    const orbRect = orb.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let x, y;
    do {
        x = Math.random() * (windowWidth - 200); // Message width ~200px
        y = Math.random() * (windowHeight - 100); // Message height ~100px
    } while (x > orbRect.left - 200 && x < orbRect.right + 200 && 
             y > orbRect.top - 100 && y < orbRect.bottom + 100);

    return { x, y };
}

orb.addEventListener('click', () => {
    const { x, y } = getRandomPosition();
    messageElement.style.left = `${x}px`;
    messageElement.style.top = `${y}px`;

    showMessage(blibVerts[messageIndex]);
    messageIndex = (messageIndex + 1) % blibVerts.length;
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
}, 800);
