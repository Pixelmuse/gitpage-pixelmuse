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

    function applyRandomEffect(element) {
        const effects = ['fade-effect', 'shadow-effect'];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        element.classList.add(randomEffect);

        // Handle click to show flash text
        element.addEventListener('click', () => {
            const flashText = document.createElement('div');
            flashText.className = 'flash-effect';
            flashText.textContent = 'SEEK';  // Example flash text
            document.body.appendChild(flashText);
            setTimeout(() => flashText.remove(), 500); // Remove after flash
        });
    }

    function displayQuote() {
        if (quotes.length === 0) return;

        let quoteText = document.getElementById('quoteText');

        let randomFontSize = Math.floor(Math.random() * 3) + 3;
        let fonts = ['Fira Mono', 'Courier New', 'Lucida Console', 'Monaco', 'Consolas'];
        let randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        quoteText.style.fontSize = `${randomFontSize}vw`;
        quoteText.style.fontFamily = randomFont;

        quoteText.innerHTML = `${quotes[currentQuoteIndex].quote}`;

        applyRandomEffect(quoteText);

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);

    fetchQuotes();
};
