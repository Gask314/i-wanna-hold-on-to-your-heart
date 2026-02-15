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

/* --- Menu & Theme Logic --- */

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

// Function to open menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Function to close menu
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu when clicking a link (optional UX improvement)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Close menu when clicking outside of it (optional)
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

/* --- Dark Mode Toggle (Updated for Multiple Buttons) --- */
// We use querySelectorAll because we have a button in the nav AND the mobile menu
const toggleBtns = document.querySelectorAll('.theme-toggle');

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Update text on ALL toggle buttons simultaneously
        toggleBtns.forEach(b => {
            b.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        });
    });
});