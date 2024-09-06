document.addEventListener('DOMContentLoaded', () => {
    const orb = document.getElementById('orb');
    const glitchText = document.getElementById('glitch-text');
    const phrases = [
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
    
    let currentPhraseIndex = 0;

    // When the orb is clicked
    orb.addEventListener('click', () => {
        orb.style.display = 'none';  // Hide the orb
        glitchText.style.display = 'block';  // Show the glitchy text
        glitchText.innerText = phrases[currentPhraseIndex];  // Show the first phrase
    });
});
