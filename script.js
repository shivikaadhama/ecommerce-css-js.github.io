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
        const sections = document.querySelectorAll('section');

        // Highlight the active navigation link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');

        // Add a fade-in effect to the target section
        targetSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(20px)';

        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
        }, 100);
        const offset = 50; // Adjust this value to fine-tune the scroll position
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Reset background color after scrolling
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 800); // Adjust timeout to match scroll duration
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
