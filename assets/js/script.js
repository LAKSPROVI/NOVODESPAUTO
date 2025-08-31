// WhatsApp Integration and Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp phone number (update with actual number)
    const whatsappNumber = '5511999999999'; // Format: country code + area code + number
    
    // WhatsApp messages for different CTAs
    const whatsappMessages = {
        hero: 'Olá! Visitei o site da Despalto e preciso de ajuda urgente com minha CNH. Pode me orientar?',
        final: 'Olá! Visitei o site da Despalto e preciso de análise gratuita do meu caso. Pode me ajudar?',
        float: 'Olá! Visitei o site da Despalto e preciso de ajuda com minha CNH. Pode me orientar?'
    };
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            
            // Change icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // WhatsApp button functionality
    function createWhatsAppURL(message) {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    }
    
    // Hero CTA
    const heroCTA = document.getElementById('hero-cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(createWhatsAppURL(whatsappMessages.hero), '_blank');
            
            // Track event (Google Analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'WhatsApp',
                    event_label: 'Hero CTA',
                    value: 1
                });
            }
        });
    }
    
    // Final CTA
    const finalCTA = document.getElementById('final-cta');
    if (finalCTA) {
        finalCTA.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(createWhatsAppURL(whatsappMessages.final), '_blank');
            
            // Track event (Google Analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'WhatsApp',
                    event_label: 'Final CTA',
                    value: 1
                });
            }
        });
    }
    
    // Floating WhatsApp button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(createWhatsAppURL(whatsappMessages.float), '_blank');
            
            // Track event (Google Analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'WhatsApp',
                    event_label: 'Floating Button',
                    value: 1
                });
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animation on scroll (simple implementation)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.problem-card, .step, .feature, .testimonial');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Form validation (if forms are added later)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // Utility function to format phone number
    function formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4,5})(\d{4})/, '$1-$2');
        input.value = value;
    }
    
    // Apply phone formatting to phone inputs
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
    
    // Loading state for buttons
    function setLoadingState(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
        } else {
            button.disabled = false;
            button.innerHTML = button.dataset.originalText || button.innerHTML;
        }
    }
    
    // Store original button text for loading states
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.dataset.originalText = button.innerHTML;
    });
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Error handling for missing elements
    function handleError(error, context) {
        console.warn(`Error in ${context}:`, error);
        // Could send to analytics or error reporting service
    }
    
    // Performance monitoring
    window.addEventListener('load', function() {
        // Simple performance check
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
        
        // Track to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'load',
                value: loadTime
            });
        }
    });
    
    // Cookie consent (basic implementation)
    function showCookieConsent() {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Could show cookie banner here
            console.log('Cookie consent needed');
        }
    }
    
    // Call cookie consent check
    showCookieConsent();
    
    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Touch gestures for mobile (basic swipe detection)
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - could trigger actions
                console.log('Swiped left');
            } else {
                // Swipe right - could trigger actions
                console.log('Swiped right');
            }
        }
    }
});

// External API integrations (to be implemented)
const Analytics = {
    // Google Analytics 4
    init: function() {
        // Implementation will depend on actual GA4 setup
        console.log('Analytics initialized');
    },
    
    track: function(eventName, parameters) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
    }
};

const MetaPixel = {
    // Meta Pixel integration
    init: function() {
        // Implementation will depend on actual Meta Pixel setup
        console.log('Meta Pixel initialized');
    },
    
    track: function(eventName, parameters) {
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, parameters);
        }
    }
};

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    Analytics.init();
    MetaPixel.init();
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}