window.onload = () => {
  const glitchText = document.getElementById('glitchText');

  // Trigger Glitch Randomly
  setInterval(() => {
    glitchText.classList.toggle('glitch-active');
  }, Math.random() * (2000 - 500) + 500);

  // Flash Effect when text fully appears
  setTimeout(() => {
    const flashDiv = document.createElement('div');
    flashDiv.className = 'flash';
    document.body.appendChild(flashDiv);

    // Remove the flash after the effect
    setTimeout(() => {
      flashDiv.remove();
    }, 200);
  }, 2500); // Flash after the glitches appear

  // Add random horizontal line glitches
  setInterval(() => {
    const line = document.createElement('div');
    line.className = 'glitch-line';
    document.body.appendChild(line);

    // Animate the line then remove it
    setTimeout(() => {
      line.remove();
    }, 500);
  }, 1000);
};

// CSS for the glitch lines in JavaScript
const glitchLineStyle = document.createElement('style');
glitchLineStyle.textContent = `
  .glitch-line {
    position: absolute;
    top: ${Math.random() * window.innerHeight}px;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    animation: glitch-line-move 0.5s linear;
  }

  @keyframes glitch-line-move {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
document.head.appendChild(glitchLineStyle);
