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
        let quoteText = document.getElementById('quoteText');
        let currentQuote = quotes[currentQuoteIndex];
        quoteText.textContent = currentQuote.quote;

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);
};
