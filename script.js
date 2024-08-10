window.onload = function() {
    let quotes = [];
    let currentQuoteIndex = 0;

    // Function to fetch quotes from data.json
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
        let quoteDate = document.getElementById('quoteDate');

        let randomX = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% of screen width
        let randomY = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% of screen height

        quoteText.style.position = 'absolute';
        quoteText.style.left = `${randomX}%`;
        quoteText.style.top = `${randomY}%`;

        quoteText.innerHTML = `${quotes[currentQuoteIndex].quote}`;
        quoteDate.innerHTML = `${quotes[currentQuoteIndex].date}`;

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('landing').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);

    // Initial fetch
    fetchQuotes();
};
