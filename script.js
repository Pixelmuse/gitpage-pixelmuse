window.onload = function() {
    let quotes = [];
    let currentQuoteIndex = 0;
    let blibVerts = [
        "SEX", "SATAN", "MONEY", "ADS", "INTERFACE", "ACCESS",
        "ENTRANCE", "ANSWERS", "PLACE", "NO ART", "WISDOM",
        "CHANCE", "MAINTENANCE", "SHIT", "PROMISES", "COMMITMENT",
        "OPTIONS", "HYPE", "PRODUCT", "RECEIPT", "LIFE", "WAY", "CLUE", "HOPE", "CONTROL"
    ];

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

        if (Math.random() > 0.7) { // 30% chance to show a flash word
            element.addEventListener('click', () => {
                const flashText = document.createElement('div');
                flashText.className = 'flash-effect';
                flashText.textContent = blibVerts[Math.floor(Math.random() * blibVerts.length)];
                document.body.appendChild(flashText);
                setTimeout(() => flashText.remove(), 500);
            });
        }
    }

    function randomBackgroundFlash() {
        if (Math.random() > 0.9) { // 10% chance to trigger a flash
            document.body.style.backgroundColor = "#fff";
            setTimeout(() => document.body.style.backgroundColor = "#000", 100);
        }
    }

    function displayQuote() {
        if (quotes.length === 0) return;

        let quoteText = document.getElementById('quoteText');

        let randomFontSize = Math.random() * (2 - 1) + 1; // Random font size between 1vw and 2vw
        let fonts = ['Fira Mono', 'Courier New', 'Lucida Console', 'Monaco', 'Consolas'];
        let randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        quoteText.style.fontSize = `${randomFontSize}vw`;
        quoteText.style.fontFamily = randomFont;

        quoteText.innerHTML = `${quotes[currentQuoteIndex].quote}`;

        applyRandomEffect(quoteText);
        randomBackgroundFlash();

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);

    fetchQuotes();
};
