document.addEventListener('DOMContentLoaded', () => {
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

    const messageElement = document.getElementById('message');
    const orb = document.getElementById('orb');
    let messageIndex = 0;

    // Display random message on orb click
    orb.addEventListener('click', () => {
        messageElement.textContent = messages[messageIndex];
        messageElement.style.opacity = 1;

        // Position the message at random, avoiding overlap with the orb
        const { x, y } = getRandomPosition();
        messageElement.style.left = `${x}px`;
        messageElement.style.top = `${y}px`;

        // Hide the message after a short duration
        setTimeout(() => {
            messageElement.style.opacity = 0;
        }, 300); // Message visible for 0.3 seconds

        // Update message index
        messageIndex = (messageIndex + 1) % messages.length;
    });

    // Calculate random position for the message, avoiding the orb's area
    function getRandomPosition() {
        const orbRect = orb.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let x, y;
        do {
            x = Math.random() * (windowWidth - 200); // Adjust for message width
            y = Math.random() * (windowHeight - 100); // Adjust for message height
        } while (
            x > orbRect.left - 200 && x < orbRect.right + 200 &&
            y > orbRect.top - 100 && y < orbRect.bottom + 100
        );

        return { x, y };
    }

    // Remove the flash effect after it runs once
    setTimeout(() => {
        const flash = document.getElementById('flash');
        if (flash) flash.remove();
    }, 500); // Matches the flash animation duration
});
