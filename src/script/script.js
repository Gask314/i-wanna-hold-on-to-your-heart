const holoContainer = document.querySelector('.holo-bands');

function createHoloBand() {
    const band = document.createElement('div');
    band.classList.add('holo-band');

    // Random horizontal position
    band.style.left = Math.random() * 100 + '%';

    // Random vertical offset (start anywhere)
    band.style.top = 0 + '%';

    // Random animation duration (20–40 seconds)
    const duration = 14000 + Math.random() * 10000;
    band.style.animation = `holoFadeDrift ${duration}ms linear`;

    holoContainer.appendChild(band);

    // Remove after animation completes
    setTimeout(() => {
        band.remove();
        createHoloBand(); // spawn a new one
    }, duration);
}

// Create initial bands
for (let i = 0; i < 4; i++) {
    setTimeout(createHoloBand, i * 2000);
}

const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    toggleBtn.textContent = 
        document.body.classList.contains('dark-mode') 
        ? 'Light Mode' 
        : 'Dark Mode';
});
