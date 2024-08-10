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
        
        let randomFontSize = Math.floor(Math.random() * 3) + 3; // Random font size between 3vw and 6vw
        let fonts = ['Fira Mono', 'Courier New', 'Lucida Console', 'Monaco', 'Consolas'];
        let randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        quoteText.style.fontSize = `${randomFontSize}vw`;
        quoteText.style.fontFamily = randomFont;

        quoteText.innerHTML = `${quotes[currentQuoteIndex].quote}`;

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);

    fetchQuotes();
};
