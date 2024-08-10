window.onload = function() {
    let quotes = [
        {
            quote: "What if everything you believe is a lie?", 
            options: [
                {text: "Challenge", action: () => console.log("Challenge chosen.")},
                {text: "Conform", action: () => console.log("Conform chosen.")}
            ]
        },
        {
            quote: "How do you know what's real?", 
            options: [
                {text: "Question", action: () => console.log("Question chosen.")},
                {text: "Accept", action: () => console.log("Accept chosen.")}
            ]
        }
    ];
    let currentQuoteIndex = 0;

    function enterSite() {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        displayQuote();
    }

    function displayQuote() {
        const quoteText = document.getElementById('quoteText');
        const currentQuote = quotes[currentQuoteIndex];
        quoteText.textContent = currentQuote.quote;

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
};
