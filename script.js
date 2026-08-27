/* ============================================
   Portfolio JavaScript - Interactive Features
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScroll();
    initMobileMenu();
    initDynamicGreeting();
    initScrollAnimations();
});

/* ============================================
   Mobile Menu Toggle
   ============================================ */

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Animate menu toggle icon
        const icon = menuToggle.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

/* ============================================
   Smooth Scrolling for Navigation Links
   ============================================ */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Get navbar height for offset
                const navbar = document.querySelector('nav');
                const navHeight = navbar ? navbar.offsetHeight : 0;
                
                // Calculate position with offset
                const targetPosition = target.offsetTop - navHeight;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   Navigation Active State on Scroll
   ============================================ */

function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('text-cyan-400'));
                
                const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-cyan-400');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on initial load
}

/* ============================================
   Dynamic Greeting Based on Time of Day
   ============================================ */

function initDynamicGreeting() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const currentHour = new Date().getHours();
    let greeting = "Welcome to my portfolio";
    let emoji = "👋";

    if (currentHour < 12) {
        greeting = "Good Morning! Let's build something amazing";
        emoji = "🌅";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! Check out my latest work";
        emoji = "☀️";
    } else {
        greeting = "Good Evening! Explore my projects";
        emoji = "🌙";
    }

    // Add dynamic greeting to console (fun Easter egg)
    console.log(`%c${emoji} ${greeting}`, 
        'font-size: 16px; color: #06b6d4; font-weight: bold; text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);'
    );
}

/* ============================================
   Scroll-based Animations (Intersection Observer)
   ============================================ */

function initScrollAnimations() {
    // Create Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll(
        '.project-card, .skill-category, .contact-method, .section-title'
    );

    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

/* ============================================
   Project Filter (Bonus Interactive Feature)
   ============================================ */

// Example function for filtering projects by tech stack
function filterProjectsByTech(tech) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const techTags = card.querySelectorAll('.tech-tag');
        const hasTech = Array.from(techTags).some(tag => 
            tag.textContent.toLowerCase().includes(tech.toLowerCase())
        );

        if (hasTech) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.4s ease-out';
        } else {
            card.style.opacity = '0.3';
            card.style.pointerEvents = 'none';
        }
    });
}

// Reset project filter
function resetProjectFilter() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
    });
}

/* ============================================
   Theme Toggle (Dark/Light) - Optional Enhancement
   ============================================ */

function initThemeToggle() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDarkScheme.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    prefersDarkScheme.addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
}

/* ============================================
   Utility: Performance Monitoring (Optional)
   ============================================ */

function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`%c⚡ Page Load Time: ${pageLoadTime}ms`, 
            'color: #10b981; font-weight: bold;'
        );
    }
}

// Call after page load
window.addEventListener('load', logPerformanceMetrics);

/* ============================================
   Export Functions for External Use
   (Uncomment if using as a module)
   ============================================ */

// export { filterProjectsByTech, resetProjectFilter, initThemeToggle };

console.log(
    `%c🚀 AI & MLOps Portfolio Loaded\n%cBridging Machine Learning & Scalable Infrastructure`,
    'color: #06b6d4; font-size: 14px; font-weight: bold;',
    'color: #10b981; font-size: 12px;'
);
