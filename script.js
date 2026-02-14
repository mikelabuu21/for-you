/* ========================================
   ENHANCED SCRAPBOOK SCRIPTS
   Super Aesthetic Edition
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    createFloatingHearts();
    createSparkles();
    initScrollAnimations();
    initConfetti();
    initMusicToggle();
    initPhotoHoverEffects();
    initParallaxEffects();
    initMagneticEffects();
    addRandomRotations();
    initLightbox();
});

/* ========================================
   IMAGE LIGHTBOX / ZOOM
   ======================================== */
function initLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    const closeBtn = document.getElementById('lightbox-close');
    const lightboxImg = document.getElementById('lightbox-image');
    
    if (!overlay || !lightboxImg) return;
    
    // Add click listener to all photo images
    document.querySelectorAll('.photo-img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            openLightbox(this.src);
        });
    });
    
    // Close on overlay click (but not on image)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target === closeBtn) {
            closeLightbox();
        }
    });
    
    // Close on X button click
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeLightbox();
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function openLightbox(imgSrc) {
        // Set the image source
        lightboxImg.src = imgSrc;
        
        // Show overlay
        overlay.classList.add('active');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        // Hide overlay
        overlay.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Clear image after animation
        setTimeout(() => {
            if (!overlay.classList.contains('active')) {
                lightboxImg.src = '';
            }
        }, 300);
    }
}

/* ========================================
   FLOATING HEARTS BACKGROUND
   ======================================== */
function createFloatingHearts() {
    const container = document.getElementById('hearts-bg');
    if (!container) return;
    
    const hearts = ['💕', '💗', '💖', '💓', '❤️', '💘', '💝', '💞', '♥️'];
    
    function createHeart() {
        const heart = document.createElement('span');
        heart.className = 'floating-bg-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.2 + 0.6) + 'rem';
        heart.style.animationDuration = (Math.random() * 12 + 8) + 's';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.opacity = Math.random() * 0.3 + 0.1;
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 22000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 400);
    }
    
    // Continue creating hearts
    setInterval(createHeart, 2500);
}

/* ========================================
   SPARKLES EFFECT
   ======================================== */
function createSparkles() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    
    const sparkleChars = ['✦', '✧', '★', '✨', '💫', '⭐'];
    
    function createSparkle() {
        const sparkle = document.createElement('span');
        sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        sparkle.style.color = Math.random() > 0.5 ? '#ffd700' : '#ffffff';
        sparkle.style.textShadow = '0 0 10px currentColor';
        sparkle.style.opacity = '0';
        sparkle.style.transition = 'opacity 0.5s ease, transform 1s ease';
        sparkle.style.pointerEvents = 'none';
        container.appendChild(sparkle);
        
        // Animate
        setTimeout(() => {
            sparkle.style.opacity = Math.random() * 0.6 + 0.3;
            sparkle.style.transform = `scale(${Math.random() * 0.5 + 0.8}) rotate(${Math.random() * 360}deg)`;
        }, 50);
        
        // Fade out and remove
        setTimeout(() => {
            sparkle.style.opacity = '0';
            setTimeout(() => sparkle.remove(), 500);
        }, 2000 + Math.random() * 2000);
    }
    
    // Create sparkles periodically
    setInterval(createSparkle, 800);
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.photo-item, .polaroid, .torn-circle, .handwritten-note, .sticky-note, ' +
        '.reason-card, .gallery-item, .mag-letter-sm, .travel-stickers, ' +
        '.section-magazine-title, .envelope'
    );
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${(index % 6) * 0.1}s`;
    });
    
    // Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger any nested animations
                entry.target.querySelectorAll('.mag-letter-sm').forEach((letter, i) => {
                    setTimeout(() => {
                        letter.style.opacity = '1';
                        letter.style.transform = `rotate(${(Math.random() - 0.5) * 10}deg)`;
                    }, i * 50);
                });
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Section title animations
    document.querySelectorAll('.section-magazine-title').forEach(title => {
        title.classList.add('fade-in');
        observer.observe(title);
    });
}

/* ========================================
   CONFETTI EFFECT
   ======================================== */
function initConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    const colors = ['#ff69b4', '#ffb6c1', '#ff1493', '#ff6b6b', '#ffd700', 
                   '#ff85a2', '#ffc0cb', '#87ceeb', '#dda0dd', '#98d8c8'];
    const shapes = ['circle', 'square', 'triangle'];
    
    function createConfettiPiece() {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const size = Math.random() * 10 + 5;
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';
        
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            piece.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            piece.style.width = '0';
            piece.style.height = '0';
            piece.style.backgroundColor = 'transparent';
            piece.style.borderLeft = `${size/2}px solid transparent`;
            piece.style.borderRight = `${size/2}px solid transparent`;
            piece.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
        }
        
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        confettiContainer.appendChild(piece);
        
        setTimeout(() => {
            if (piece.parentNode) piece.remove();
        }, 5000);
    }
    
    // Create confetti when final section is visible
    const finalSection = document.querySelector('.page-final');
    if (!finalSection) return;
    
    let confettiTriggered = false;
    
    const confettiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !confettiTriggered) {
                confettiTriggered = true;
                // Initial burst
                for (let i = 0; i < 80; i++) {
                    setTimeout(createConfettiPiece, i * 30);
                }
                // Continue for a while
                const interval = setInterval(() => {
                    for (let i = 0; i < 5; i++) {
                        createConfettiPiece();
                    }
                }, 500);
                
                setTimeout(() => clearInterval(interval), 5000);
            }
        });
    }, { threshold: 0.3 });
    
    confettiObserver.observe(finalSection);
}

/* ========================================
   MUSIC TOGGLE
   ======================================== */
function initMusicToggle() {
    const musicBtn = document.getElementById('music-toggle');
    if (!musicBtn) return;
    
    let isPlaying = false;
    
    const audio = new Audio();
    audio.src = 'keep.mp3';
    audio.loop = true;
    
    musicBtn.addEventListener('click', () => {
        if (audio.src && audio.src !== window.location.href) {
            if (isPlaying) {
                audio.pause();
                musicBtn.classList.remove('playing');
                musicBtn.textContent = '🎵';
            } else {
                audio.play().catch(e => {
                    showMusicAlert();
                });
                musicBtn.classList.add('playing');
                musicBtn.textContent = '🔊';
            }
            isPlaying = !isPlaying;
        } else {
            showMusicAlert();
        }
    });
    
    function showMusicAlert() {
        // Create a cute notification instead of alert
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                bottom: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                font-family: 'Patrick Hand', cursive;
                font-size: 1rem;
                color: #8b4513;
                z-index: 1001;
                max-width: 280px;
                animation: slideIn 0.3s ease;
            ">
                <p style="margin: 0 0 0.5rem 0;">🎵 <strong>Add your favorite song!</strong></p>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">
                    Place an MP3 file in the folder and update script.js line 129
                </p>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

/* ========================================
   PHOTO HOVER EFFECTS
   ======================================== */
function initPhotoHoverEffects() {
    const photoItems = document.querySelectorAll('.photo-item, .polaroid, .gallery-item');
    
    photoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '100';
            
            // Add sparkle effect on hover
            const sparkle = document.createElement('span');
            sparkle.textContent = '✨';
            sparkle.style.cssText = `
                position: absolute;
                top: -10px;
                right: -10px;
                font-size: 1.5rem;
                animation: sparkleAppear 0.5s ease forwards;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 500);
        });
        
        item.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.style.zIndex = '';
            }, 300);
        });
    });
    
    // Add CSS for sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleAppear {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
            100% { transform: scale(1) rotate(360deg); opacity: 0; }
        }
        @keyframes slideIn {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

/* ========================================
   PARALLAX EFFECTS
   ======================================== */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll(
        '.sparkle, .landing-sticker, .deco-star, .travel-icon, .float-heart'
    );
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                
                parallaxElements.forEach((el, index) => {
                    const speed = 0.03 + (index % 5) * 0.01;
                    const yPos = scrollY * speed;
                    const rotate = Math.sin(scrollY * 0.01 + index) * 5;
                    el.style.transform = `translateY(${yPos}px) rotate(${rotate}deg)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ========================================
   MAGNETIC HOVER EFFECT
   ======================================== */
function initMagneticEffects() {
    const magneticElements = document.querySelectorAll('.mag-letter, .mag-letter-sm, .mag-letter-lg');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) rotate(${x * 0.05}deg) scale(1.1)`;
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/* ========================================
   RANDOM ROTATIONS FOR NATURAL LOOK
   ======================================== */
function addRandomRotations() {
    const rotateElements = document.querySelectorAll(
        '.reason-card, .gallery-item, .photo-item'
    );
    
    rotateElements.forEach(el => {
        const rotation = (Math.random() - 0.5) * 8;
        const currentTransform = el.style.transform || '';
        if (!currentTransform.includes('rotate')) {
            el.style.transform = currentTransform + ` rotate(${rotation}deg)`;
        }
    });
}

/* ========================================
   EASTER EGG: DOUBLE CLICK HEART BURST
   ======================================== */
document.addEventListener('dblclick', function(e) {
    const hearts = ['💕', '💗', '💖', '💓', '❤️', '💘', '💝', '💞', '♥️', '✨', '🌸'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        document.body.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / 15;
        const distance = 80 + Math.random() * 60;
        
        requestAnimationFrame(() => {
            heart.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance - 50}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        });
        
        setTimeout(() => heart.remove(), 1000);
    }
});

/* ========================================
   CURSOR SPARKLE TRAIL ON MOBILE TAP
   ======================================== */
document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    createTouchSparkle(touch.clientX, touch.clientY);
});

function createTouchSparkle(x, y) {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 2rem;
        pointer-events: none;
        z-index: 9999;
        animation: touchSparkle 0.8s ease forwards;
    `;
    document.body.appendChild(sparkle);
    
    // Add animation style if not exists
    if (!document.getElementById('touch-sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'touch-sparkle-style';
        style.textContent = `
            @keyframes touchSparkle {
                0% { transform: scale(0) rotate(0deg); opacity: 1; }
                50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
                100% { transform: scale(0) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => sparkle.remove(), 800);
}

/* ========================================
   SMOOTH SCROLL FOR ANY ANCHORS
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   PAGE LOAD ANIMATION
   ======================================== */
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        
        // Animate magazine letters sequentially
        document.querySelectorAll('.magazine-title .mag-letter').forEach((letter, i) => {
            letter.style.opacity = '0';
            letter.style.transform = 'translateY(20px) rotate(0deg)';
            
            setTimeout(() => {
                letter.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                letter.style.opacity = '1';
                letter.style.transform = `translateY(0) rotate(${(Math.random() - 0.5) * 10}deg)`;
            }, 300 + i * 80);
        });
    }, 100);
});

/* ========================================
   KONAMI CODE EASTER EGG
   ======================================== */
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateRainbowMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateRainbowMode() {
    document.body.style.animation = 'rainbowBg 5s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbowBg {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Create celebration
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.textContent = ['💕', '🌈', '✨', '💖', '🎉'][Math.floor(Math.random() * 5)];
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${Math.random() * 30 + 20}px;
                pointer-events: none;
                z-index: 9999;
                animation: rainbowFall ${Math.random() * 3 + 2}s linear forwards;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 50);
    }
    
    // Add fall animation
    const fallStyle = document.createElement('style');
    fallStyle.textContent = `
        @keyframes rainbowFall {
            to { transform: translateY(110vh) rotate(720deg); }
        }
    `;
    document.head.appendChild(fallStyle);
    
    // Remove effect after 10 seconds
    setTimeout(() => {
        document.body.style.animation = '';
    }, 10000);
}

/* ========================================
   CONSOLE MESSAGE
   ======================================== */
console.log('%c💕 Made with love for someone special 💕', 
    'font-size: 20px; color: #ff69b4; font-family: cursive; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cHappy Valentine\'s Day! 🌹', 
    'font-size: 16px; color: #ff1493; font-family: cursive;');
