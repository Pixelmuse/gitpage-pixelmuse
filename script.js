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

const glitchText = document.getElementById('glitch-text');

glitchText.addEventListener('click', () => {
  // Randomize the text content and the data attribute
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  glitchText.textContent = randomPhrase;
  glitchText.setAttribute('data-text', randomPhrase);
});
