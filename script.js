window.onload = function() {
    let quotes = [
        {
            quote: "What if everything you believe is a lie?", 
            options: [
                {text: "Challenge", action: () => alert("Challenge chosen!")},
                {text: "Conform", action: () => alert("Conform chosen!")},
                {text: "Look closer", action: () => alert("Look closer chosen!")},
                {text: "Ignore it", action: () => alert("Ignore it chosen!")}
            ]
        },
        {
            quote: "How do you know what's real?", 
            options: [
                {text: "Question", action: () => alert("Question chosen!")},
                {text: "Accept", action: () => alert("Accept chosen!")},
                {text: "Seek", action: () => alert("Seek chosen!")},
                {text: "Settle", action: () => alert("Settle chosen!")}
            ]
        }
        // Additional quotes and options can be added here
    ];

    let currentQuoteIndex = 0;

    function enterSite() {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        displayQuote();
    }

    function displayQuote() {
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

        choicesContainer.innerHTML = options.map(option => `<span class="choice">${option.text}</span>`).join(' | ');
        document.getElementById('content').appendChild(choicesContainer);

        choicesContainer.querySelectorAll('.choice').forEach((choice, index) => {
            choice.addEventListener('click', options[index].action);
        });
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);

    fetchQuotes();
};
