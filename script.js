window.onload = () => {
  const glitchText = document.getElementById('glitchText');

  // Trigger Glitch Randomly
  setInterval(() => {
    glitchText.classList.toggle('glitch-active');
  }, Math.random() * (800 - 300) + 300); // Faster and more frequent glitching

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
    line.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(line);

    // Animate the line then remove it
    setTimeout(() => {
      line.remove();
    }, 500);
  }, 500); // More frequent static lines
};
