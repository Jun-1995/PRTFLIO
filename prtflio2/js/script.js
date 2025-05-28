document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // You can add more JavaScript here for:
    // - Image sliders/carousels for portfolio items
    // - Lightbox functionality for images
    // - Form submission handling (e.g., using Fetch API to send email)
    // - Dynamic content loading
    // - Mobile navigation toggles (hamburger menu)
});