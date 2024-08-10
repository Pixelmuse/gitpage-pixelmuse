window.onload = function() {
    let quotes = [
        {
            quote: "What if everything you believe is a lie?", 
            options: [
                {text: "Challenge", action: () => showMessage("You chose to challenge the norm.")},
                {text: "Conform", action: () => redirectToEnd()}
            ]
        },
        {
            quote: "How do you know what's real?", 
            options: [
                {text: "Question", action: () => showMessage("Question everything.")},
                {text: "Accept", action: () => redirectToEnd()}
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

    function showMessage(message) {
        // Display the message or trigger some other subtle visual effect
        const messageElement = document.createElement('p');
        messageElement.className = 'message';
        messageElement.textContent = message;
        document.getElementById('content').appendChild(messageElement);

        setTimeout(() => messageElement.remove(), 2000);
    }

    function redirectToEnd() {
        window.location.href = "end.html";
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
    document.getElementById('content').addEventListener('click', displayQuote);
};
