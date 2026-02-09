document.documentElement.classList.add('js');

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links (polishing standard behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset for fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Fade-in on scroll observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, we can unobserve if we only want it to happen once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to observe for fade-in
document.querySelectorAll('.fade-in, .section-title, .service-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Fade-in on scroll observer... (rest of the file remains same, removing project expansion logic below)
