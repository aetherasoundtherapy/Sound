// Wait for the webpage to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // Find every section labeled with 'reveal-item'
    const itemsToReveal = document.querySelectorAll('.reveal-item');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85; // Triggers when element is 85% down screen
        
        itemsToReveal.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if(itemTop < triggerBottom) {
                item.classList.add('active');
            }
        });
    };
    
    // Run once immediately on load so the top hero content reveals right away
    revealOnScroll();
    
    // Listen for scroll events to fade elements in as you move down the page
    window.addEventListener('scroll', revealOnScroll);
});
