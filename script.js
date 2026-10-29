document.addEventListener("DOMContentLoaded", () => {
    // 1. Generate Floating Particles in Background
    const particleContainer = document.getElementById("particles");
    if (particleContainer) {
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement("div");
            bubble.classList.add("particle");
            
            const size = Math.random() * 80 + 20; // 20px to 100px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.top = `${Math.random() * 100}%`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            
            particleContainer.appendChild(bubble);
        }
    }

    // 2. Scroll Animation Trigger (AOS Style Effect)
    const animatedElements = document.querySelectorAll("[data-animate]");

    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        animatedElements.forEach((el) => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run initial check

    // 3. Mobile Navigation Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // 4. Contact Form Submission Notification
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you, Ifra! Your message has been submitted successfully.");
            contactForm.reset();
        });
    }
});