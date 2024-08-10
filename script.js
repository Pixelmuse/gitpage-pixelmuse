window.onload = function() {
    function enterSite() {
        document.getElementById('landing').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('quoteText').textContent = "Welcome to the experience!";
    }

    document.getElementById('pulse').addEventListener('click', enterSite);
};
