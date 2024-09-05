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

    orb.addEventListener('click', () => {
        messageElement.textContent = messages[messageIndex];
        messageElement.style.opacity = 1;

        const { x, y } = getRandomPosition();
        messageElement.style.left = `${x}px`;
        messageElement.style.top = `${y}px`;

        // Flash the message on screen briefly (no fading)
        setTimeout(() => {
            messageElement.style.opacity = 0;
        }, 500); // Display message for 0.2 seconds (fast flash)

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
