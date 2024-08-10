window.onload = function() {
    let quotes = [];
    let currentQuoteIndex = 0;

    function fetchQuotes() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                quotes = data;
                displayQuote();
            })
            .catch(error => console.log('Error loading data:', error));
    }

    function enterSite() {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        displayQuote();
    }

    function displayQuote() {
        if (quotes.length === 0) return;

        let quoteText = document.getElementById('quoteText');

        let randomX = Math.floor(Math.random() * 70) + 15;
        let randomY = Math.floor(Math.random() * 70) + 15;

        quoteText.style.left = `${randomX}%`;
        quoteText.style.top = `${randomY}%`;

        quoteText.innerHTML = `${quotes[currentQuoteIndex].quote}`; // Removed quotation marks

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);

    fetchQuotes();
};
