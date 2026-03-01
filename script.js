// ===== Pink Floyd Portfolio — script.js =====

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initThemeToggle();
    initScrollAnimations();
    initHeroBeams();
    initContactForm();
    initSmoothScroll();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    hamburger.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
            mobileNav.classList.remove('open');
            hamburger.innerHTML = menuIcon;
        } else {
            mobileNav.classList.add('open');
            hamburger.innerHTML = closeIcon;
        }
    });

    // Close mobile menu on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            hamburger.innerHTML = menuIcon;
        });
    });
}

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;

const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    // Default to dark
    if (savedTheme === 'light') {
        html.classList.add('light');
    }

    updateThemeIcons();

    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            html.classList.toggle('light');
            const isLight = html.classList.contains('light');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateThemeIcons();
        });
    });
}

function updateThemeIcons() {
    const isLight = document.documentElement.classList.contains('light');
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.innerHTML = isLight ? moonIcon : sunIcon;
    });
}

// ===== SCROLL ANIMATIONS (IntersectionObserver) =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== HERO SVG BEAM ANIMATION =====
function initHeroBeams() {
    const beams = document.querySelectorAll('.rainbow-beam');
    beams.forEach((beam, i) => {
        setTimeout(() => {
            beam.classList.add('animate');
        }, 1500 + (i * 100));
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;

        // Since there's no backend, compose a mailto link
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
        window.location.href = `mailto:dangal.manit@gmail.com?subject=${subject}&body=${body}`;
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
