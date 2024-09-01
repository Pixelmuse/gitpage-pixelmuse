const textArray = [
    "Hello World",
    "Welcome to the Circle",
    "Enjoy the Colors",
    "Click Again",
    "Last Message"
];

let currentIndex = 0;

document.querySelector('.circle').addEventListener('click', () => {
    const textContainer = document.querySelector('.text-container');
    textContainer.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
});
