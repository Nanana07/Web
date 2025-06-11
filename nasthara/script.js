document.addEventListener('DOMContentLoaded', () => {
    // Optional: Smooth scroll for internal links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Dynamic Countdown for Limited Batch Reminder (Consider removing if not needed with "Made by Order")
    // const targetDate = new Date("2025-04-10T00:00:00").getTime(); // Example: April 10, 2025

    // const countdownElement = document.getElementById('countdown');
    // if (countdownElement) {
    //     function updateCountdown() {
    //         const now = new Date().getTime();
    //         const distance = targetDate - now;

    //         if (distance < 0) {
    //             countdownElement.innerHTML = "Batch Habis!";
    //             clearInterval(countdownInterval);
    //             return;
    //         }

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
    //     }

    //     const countdownInterval = setInterval(updateCountdown, 1000);
    //     updateCountdown(); // Initial call
    // }

    // Optional: Random rotation for polaroid testimonials (aesthetic touch)
    document.querySelectorAll('.testimonial-item.polaroid-style').forEach(item => {
        const rotation = (Math.random() * 6) - 3; // -3deg to +3deg
        item.style.setProperty('--rotation-angle', `${rotation}deg`);
    });
});
