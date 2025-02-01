// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Optimized Dimensional Scrolling Effect
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            applyDimensionalScrollEffect();
            ticking = false;
        });
        ticking = true;
    }
});

// Dimensional Scrolling Effect
function applyDimensionalScrollEffect() {
    const sections = document.querySelectorAll('section');
    const threshold = window.innerHeight / 2;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';
        } else {
            section.style.transform = 'translateY(100px)';
            section.style.opacity = '0.8';
        }
    });
}
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
