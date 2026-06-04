// Handles interactive layout and smooth behaviors
document.addEventListener("DOMContentLoaded", () => {
    console.log("Æthera application interface initialized successfully.");
    
    // Smooth scrolling link behavior for the booking button
    const bookingButton = document.querySelector('a[href="#booking"]');
    if (bookingButton) {
        bookingButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('booking');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
