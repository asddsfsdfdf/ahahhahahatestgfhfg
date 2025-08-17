// Animations for ChartMaster AI

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        'section, .feature-card, .use-case-card, .style-card, .testimonial-card, .pricing-card'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = 0.5;
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Number counting animation
function animateNumbers() {
    const numbers = document.querySelectorAll('[data-count]');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Trigger number animation when visible
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            numberObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe trust section if it has numbers
const trustSection = document.querySelector('.trust-section');
if (trustSection) {
    numberObserver.observe(trustSection);
}