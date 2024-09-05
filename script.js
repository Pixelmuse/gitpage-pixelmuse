document.addEventListener('DOMContentLoaded', () => {
const messages = [
    "if ( 1 + 1 == 1 ){ e8z = true; }",
    "What is real?",
    "Curiosity brought you here.",
    "Do you believe in destiny?",
    "Follow the white rabbit.",
    "Are you awake, or just dreaming?",
    "What is the truth?",
    "Down the rabbit hole you go.",
    "Reality is an illusion.",
    "What if I told you this is not real?",
    "You are the key.",
    "Which path will you choose?",
    "The choice is yours.",
    "What are you searching for?",
    "Everything you know is wrong.",
    "Do you trust your senses?",
    "Welcome to the other side.",
    "How far will you go?",
    "Nothing is as it seems.",
    "This is only the beginning.",
    "Are you the dreamer, or the dream?",
    "Question everything.",
    "Will you take the leap?",
    "The rabbit hole is deeper than you think.",
    "Are you sure you want to continue?",
    "Don't look back now.",
    "What do you see when you close your eyes?"
];


    const messageElement = document.getElementById('message');
    const orb = document.getElementById('orb');
    let messageIndex = 0;

    orb.addEventListener('click', () => {
        messageElement.textContent = messages[messageIndex];
        messageElement.style.opacity = 1;

        const { x, y } = getRandomPosition();
        messageElement.style.left = `${x}px`;
        messageElement.style.top = `${y}px`;

        // Flash the message on screen briefly (no fading)
        setTimeout(() => {
            messageElement.style.opacity = 0;
        }, 1500); // Display message for 0.2 seconds (fast flash)

        // Cycle to the next message
        messageIndex = (messageIndex + 1) % messages.length;
    });

    function getRandomPosition() {
        const orbRect = orb.getBoundingClientRect();
        const messageWidth = messageElement.offsetWidth || 200; // Measure or estimate message width
        const messageHeight = messageElement.offsetHeight || 100; // Measure or estimate message height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let x, y;

        do {
            x = Math.random() * (windowWidth - messageWidth);
            y = Math.random() * (windowHeight - messageHeight);
        } while (
            x > orbRect.left - messageWidth && x < orbRect.right + messageWidth &&
            y > orbRect.top - messageHeight && y < orbRect.bottom + messageHeight
        );

        // Ensure text does not go beyond screen edges
        x = Math.min(Math.max(0, x), windowWidth - messageWidth);
        y = Math.min(Math.max(0, y), windowHeight - messageHeight);

        return { x, y };
    }

    setTimeout(() => {
        const flash = document.getElementById('flash');
        if (flash) flash.remove();
    }, 500);
});
