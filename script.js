window.onload = () => {
  // Flash Effect when the text fully appears
  setTimeout(() => {
    const flashDiv = document.createElement('div');
    flashDiv.className = 'flash';
    document.body.appendChild(flashDiv);

    // Remove the flash after the effect
    setTimeout(() => {
      flashDiv.remove();
    }, 200);
  }, 2500); // Flash after the glitches appear

  // Add random horizontal glitch lines
  setInterval(() => {
    const line = document.createElement('div');
    line.className = 'glitch-line';
    line.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(line);

    // Remove the line after the animation
    setTimeout(() => {
      line.remove();
    }, 500);
  }, 1000); // More frequent static lines
};
