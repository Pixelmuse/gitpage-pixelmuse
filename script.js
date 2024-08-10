window.onload = function() {
    let quotes = [
        {quote: "What if everything you believe is a lie?", options: ["Challenge | Conform", "Look closer | Ignore it"]},
        {quote: "How do you know what's real?", options: ["Question | Accept", "Seek | Settle"]},
        {quote: "Reality is just an illusion, or is it?", options: ["Trust | Distrust", "Dive deeper | Stay on the surface"]},
        {quote: "What lies beneath the surface?", options: ["Explore | Retreat", "Open your mind | Close your eyes"]},
        {quote: "In seeking the truth, have you found yourself?", options: ["Yes | No", "Continue | End"]},
        {quote: "Is the journey over, or has it just begun?", options: ["Finish | Restart", "Reflect | Forget"]}
    ];
    let currentQuoteIndex = 0;

    function enterSite() {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        displayQuote();
    }

    function displayQuote() {
        // Clear existing choices before showing new ones
        const existingChoices = document.querySelectorAll('.choices');
        existingChoices.forEach(choice => choice.remove());

        let quoteText = document.getElementById('quoteText');
        let currentQuote = quotes[currentQuoteIndex];
        quoteText.textContent = currentQuote.quote;

        if (currentQuote.options) {
            showChoices(currentQuote.options);
        }

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    function showChoices(options) {
        const choicesContainer = document.createElement('div');
        choicesContainer.className = 'choices';

        choicesContainer.innerHTML = options.map(option => `<span class="choice">${option}</span>`).join(' | ');
        document.getElementById('content').appendChild(choicesContainer);

        choicesContainer.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', () => {
                // Random effect on click (could be a glitch or change in text)
                choice.innerHTML = shoutVerts[Math.floor(Math.random() * shoutVerts.length)];
                setTimeout(() => choicesContainer.remove(), 1500);
            });
        });
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);
};
