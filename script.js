document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.getElementById('glitch-text');
    const effects = ['glitch-effect-1', 'glitch-effect-2', 'glitch-effect-3'];
    let currentEffectIndex = 0;

    // Function to randomize the position of the text
    function randomizePosition() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const randomX = Math.random() * (windowWidth - 300); // Ensure it stays within the screen
        const randomY = Math.random() * (windowHeight - 150); // Adjust for text height
        glitchText.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Function to switch between glitch effects
    function switchGlitchEffect() {
        glitchText.classList.remove(effects[currentEffectIndex]);
        currentEffectIndex = (currentEffectIndex + 1) % effects.length;
        glitchText.classList.add(effects[currentEffectIndex]);
    }

    // Event listener for clicking the text
    glitchText.addEventListener('click', () => {
        randomizePosition(); // Move text randomly
        switchGlitchEffect(); // Switch to a new glitch effect
    });
});
