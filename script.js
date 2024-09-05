document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.getElementById('glitch-text');
    const effects = ['glitch-effect-1'];  // For now, we'll keep only one effect to simplify
    let currentEffectIndex = 0;

    // Function to randomize the position of the text
    function randomizePosition() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const randomX = Math.random() * (windowWidth - glitchText.offsetWidth); // Adjust for text width
        const randomY = Math.random() * (windowHeight - glitchText.offsetHeight); // Adjust for text height
        glitchText.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Event listener for clicking the text
    glitchText.addEventListener('click', () => {
        randomizePosition(); // Move text randomly
    });
});
