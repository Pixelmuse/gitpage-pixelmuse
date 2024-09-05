document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.getElementById('glitch-text');

    // Function to randomize the position of the text within the viewport
    function randomizePosition() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const textWidth = glitchText.offsetWidth;
        const textHeight = glitchText.offsetHeight;

        // Ensure the text stays within the visible area
        const randomX = Math.random() * (windowWidth - textWidth);
        const randomY = Math.random() * (windowHeight - textHeight);

        // Apply the random position
        glitchText.style.left = `${randomX}px`;
        glitchText.style.top = `${randomY}px`;
        glitchText.style.transform = 'translate(0, 0)';  // Remove the initial centering transform
    }

    // Event listener for clicking the text
    glitchText.addEventListener('click', () => {
        randomizePosition(); // Move text randomly after each click
    });
});
