// WhatsApp Integration and Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp phone number (configured)
    const whatsappNumber = '5515996691637'; // Format: country code + area code + number
    
    // WhatsApp messages for different CTAs
    const whatsappMessages = {
        hero: 'Olá! Visitei o site da Despauto e preciso de ajuda urgente com minha CNH. Pode me orientar?',
        final: 'Olá! Visitei o site da Despauto e preciso de análise gratuita do meu caso. Pode me ajudar?',
        float: 'Olá! Visitei o site da Despauto e preciso de ajuda com minha CNH. Pode me orientar?'
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
        // FAQ Toggle Script (centralized)
        (function initFAQ() {
            try {
                const faqItems = document.querySelectorAll('.faq-item__question');
                if (!faqItems || faqItems.length === 0) return;

                faqItems.forEach(item => {
                    // Ensure the corresponding answer exists
                    const answer = item.nextElementSibling;
                    if (!answer) return;

                    // initialize hidden state for accessibility
                    answer.style.display = 'none';

                    item.setAttribute('role', 'button');
                    item.setAttribute('tabindex', '0');

                    const toggle = function() {
                        // Close other open items
                        faqItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                const otherAnswer = otherItem.nextElementSibling;
                                const otherIcon = otherItem.querySelector('i');
                                if (otherAnswer) otherAnswer.style.display = 'none';
                                if (otherIcon) {
                                    otherIcon.classList.remove('fa-minus-circle');
                                    otherIcon.classList.add('fa-question-circle');
                                }
                            }
                        });

                        const icon = item.querySelector('i');
                        if (answer.style.display === 'block') {
                            answer.style.display = 'none';
                            if (icon) {
                                icon.classList.remove('fa-minus-circle');
                                icon.classList.add('fa-question-circle');
                            }
                        } else {
                            answer.style.display = 'block';
                            if (icon) {
                                icon.classList.remove('fa-question-circle');
                                icon.classList.add('fa-minus-circle');
                            }
                        }
                    };

                    item.addEventListener('click', toggle);
                    item.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggle();
                        }
                    });
                });
            } catch (err) {
                console.warn('FAQ init error:', err);
            }
        })();
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
        // Lazy loading for images
        (function initLazyLoading() {
            try {
                // Prefer native lazy loading
                const imgs = document.querySelectorAll('img');
                imgs.forEach(img => {
                    if (!('loading' in HTMLImageElement.prototype)) return;
                    // set loading attr if not present
                    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
                });

                // Fallback: observe images with data-src (if any)
                const dataSrcImages = document.querySelectorAll('img[data-src]');
                if (dataSrcImages.length === 0) return;

                const imageObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset && img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                            }
                            imageObserver.unobserve(img);
                        }
                    });
                });

                dataSrcImages.forEach(img => imageObserver.observe(img));
            } catch (err) {
                console.warn('Lazy-loading init error:', err);
            }
        })();
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
    // Service Worker registration (guarded)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Try to fetch the service worker script before registering to avoid 404
            fetch('/sw.js', { method: 'HEAD' }).then(resp => {
                if (resp.ok) {
                    navigator.serviceWorker.register('/sw.js')
                        .then(function(registration) {
                            console.log('ServiceWorker registration successful');
                        })
                        .catch(function(error) {
                            console.log('ServiceWorker registration failed', error);
                        });
                } else {
                    // sw.js not present - skip registration
                    console.log('No service worker to register (sw.js missing)');
                }
            }).catch(err => {
                console.log('Service worker check failed:', err);
            });
        });
    }
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
        // Ensure the visible phone number is shown next to the icon without changing the icon
        try {
            // formatted display: +55 (15) 99669-1637
            const formatted = '+55 (15) 99669-1637';
            const numberEl = document.createElement('span');
            numberEl.className = 'whatsapp-float__number';
            numberEl.setAttribute('aria-hidden', 'false');
            numberEl.textContent = formatted;
            // insert into parent (.whatsapp-float) so it appears left of the round button
            const floatWrapper = document.getElementById('whatsapp-float');
            if (floatWrapper && !floatWrapper.querySelector('.whatsapp-float__number')) {
                floatWrapper.insertBefore(numberEl, whatsappBtn);
            }
        } catch (err) {
            console.warn('Could not render WhatsApp number:', err);
        }
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
    const animateElements = document.querySelectorAll('.problem-card, .step, .feature, .testimonial, .infraction-card, .points-info');
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
        try {
            const consent = localStorage.getItem('cookieConsent');
            if (consent) return; // already accepted

            // Build banner element
            const banner = document.createElement('div');
            banner.className = 'cookie-consent';
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-live', 'polite');
            banner.innerHTML = `
                <div class="cookie-consent__inner container">
                    <div class="cookie-consent__text">
                        Usamos cookies para melhorar sua experi eancia. Ao continuar, voc ea concorda com nossa <a href="politica-cookies.html">Pol edtica de Cookies</a> e <a href="politica-privacidade.html">Pol edtica de Privacidade</a>.
                    </div>
                    <div class="cookie-consent__actions">
                        <button class="btn btn--secondary cookie-accept">Aceitar</button>
                    </div>
                </div>
            `;

            document.body.appendChild(banner);

            const acceptBtn = banner.querySelector('.cookie-accept');
            acceptBtn.addEventListener('click', function() {
                localStorage.setItem('cookieConsent', 'true');
                banner.style.opacity = '0';
                banner.style.transform = 'translateY(20px)';
                setTimeout(() => banner.remove(), 300);
            });
        } catch (err) {
            console.warn('Cookie consent error:', err);
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