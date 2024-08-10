window.onload = function() {
    let quotes = [
        { "date": "2024-08-08", "quote": "This is an example quote." },
        { "date": "2024-08-07", "quote": "Another insightful thought." }
    ];

    let currentQuoteIndex = 0;

    function enterSite() {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        displayQuote();
    }

    function displayQuote() {
        let quoteText = document.getElementById('quoteText');
        let quoteDate = document.getElementById('quoteDate');

        quoteText.innerHTML = `"${quotes[currentQuoteIndex].quote}"`;
        quoteDate.innerHTML = `${quotes[currentQuoteIndex].date}`;

        setTimeout(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            displayQuote();
        }, 5000);
    }

    document.getElementById('landing').addEventListener('click', enterSite);
};
