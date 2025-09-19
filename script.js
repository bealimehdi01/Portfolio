// EmailJS Configuration - Live credentials
const EMAILJS_PUBLIC_KEY = 'f1_-zhshNpK1QBwCS';
const EMAILJS_SERVICE_ID = 'service_04s34b8';  
const EMAILJS_TEMPLATE_ID = 'template_ez6fmiw';

// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Typing Animation
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize TypeWriter
document.addEventListener('DOMContentLoaded', () => {
    const txtElement = document.querySelector('.typing-text');
    const words = [
        "Hello, I'm Ali Mehdi Sayyed",
        "I'm a Full Stack Developer",
        "I create amazing web experiences",
        "Let's build something great together"
    ];
    
    if (txtElement) {
        new TypeWriter(txtElement, words, 2000);
    }
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6366f1'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-header, .about-text, .about-image, .skill-category, .project-card, .contact-item, .contact-form');
    
    animateElements.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('fade-in');
        } else {
            el.classList.add('slide-in-left');
        }
        observer.observe(el);
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Initialize counters when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
});

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Navbar Scroll Effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class for styling
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinksArray = Array.from(navLinks);

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY' || 
        EMAILJS_SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_EMAILJS_TEMPLATE_ID') {
        showNotification('EmailJS is not configured. Please check SETUP-EMAILJS.md for setup instructions.', 'error');
        return;
    }
    
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        showNotification('Email service is not available. Please try again later.', 'error');
        return;
    }
    
    // Get form data
    const formData = new FormData(contactForm);
    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_name: 'Ali Mehdi Sayyed'
    };
    
    // Show sending message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;
    
    try {
        // Send email using EmailJS
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
        
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    } catch (error) {
        console.error('EmailJS Error:', error);
        showNotification('Sorry, there was an error sending your message. Please try again later.', 'error');
    } finally {
        // Restore button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        }
        .notification-success {
            background: #10b981;
            color: white;
        }
        .notification-error {
            background: #ef4444;
            color: white;
        }
        .notification-info {
            background: #3b82f6;
            color: white;
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            margin: 0;
        }
        .notification.show {
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                    document.head.removeChild(style);
                }
            }, 300);
        }
    }, 5000);
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loading');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
});

// Add preloader HTML
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.createElement('div');
    preloader.className = 'loading';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image, .floating-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Skill Items Hover Effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05) rotateY(10deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Project Cards 3D Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});

// Easter Egg - Konami Code
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            showNotification('🎉 Konami Code activated! Starting the Portfolio Game!', 'success');
            startPortfolioGame();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to resource-intensive scroll events
const debouncedScrollHandler = debounce(() => {
    // Expensive scroll operations here
}, 16); // 60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Portfolio Game - Collect Skills Game
let gameState = {
    active: false,
    paused: false,
    muted: false,
    score: 0,
    level: 1,
    player: { x: 50, y: 50, size: 30 },
    skills: [],
    gameLoop: null,
    canvas: null,
    ctx: null,
    keys: {}
};

function startPortfolioGame() {
    if (gameState.active) return;
    
    gameState.active = true;
    gameState.paused = false;
    gameState.score = 0;
    gameState.level = 1;
    
    createGameCanvas();
    createGameControls();
    initializeGame();
    startGameLoop();
}

function createGameCanvas() {
    // Create game container
    const gameContainer = document.createElement('div');
    gameContainer.id = 'portfolio-game';
    gameContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: 3px solid #fff;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    `;
    
    gameState.canvas = canvas;
    gameState.ctx = canvas.getContext('2d');
    
    // Game title
    const title = document.createElement('h2');
    title.textContent = 'Portfolio Skills Collector';
    title.style.cssText = `
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    `;
    
    gameContainer.appendChild(title);
    gameContainer.appendChild(canvas);
    document.body.appendChild(gameContainer);
}

function createGameControls() {
    const controlsContainer = document.createElement('div');
    controlsContainer.style.cssText = `
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        align-items: center;
    `;
    
    // Score display
    const scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'game-score-display';
    scoreDisplay.style.cssText = `
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        margin-right: 2rem;
    `;
    scoreDisplay.textContent = 'Score: 0 | Level: 1';
    
    // Pause button
    const pauseBtn = document.createElement('button');
    pauseBtn.innerHTML = '⏸️ Pause';
    pauseBtn.style.cssText = `
        background: #4CAF50;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: background 0.3s;
    `;
    pauseBtn.onclick = toggleGamePause;
    
    // Mute button
    const muteBtn = document.createElement('button');
    muteBtn.id = 'game-mute-btn';
    muteBtn.innerHTML = '🔊 Sound';
    muteBtn.style.cssText = `
        background: #2196F3;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: background 0.3s;
    `;
    muteBtn.onclick = toggleGameMute;
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '❌ Close';
    closeBtn.style.cssText = `
        background: #f44336;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: background 0.3s;
    `;
    closeBtn.onclick = closePortfolioGame;
    
    // Instructions
    const instructions = document.createElement('div');
    instructions.style.cssText = `
        color: white;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        margin-top: 1rem;
        font-size: 0.9rem;
    `;
    instructions.innerHTML = `
        Use WASD or Arrow Keys to move • Collect skills to increase score • Avoid obstacles!
    `;
    
    controlsContainer.appendChild(scoreDisplay);
    controlsContainer.appendChild(pauseBtn);
    controlsContainer.appendChild(muteBtn);
    controlsContainer.appendChild(closeBtn);
    
    const gameContainer = document.getElementById('portfolio-game');
    gameContainer.appendChild(controlsContainer);
    gameContainer.appendChild(instructions);
}

function initializeGame() {
    // Reset player position
    gameState.player = { 
        x: gameState.canvas.width / 2, 
        y: gameState.canvas.height / 2, 
        size: 25,
        color: '#FFD700'
    };
    
    // Initialize skills to collect
    gameState.skills = [];
    const skillTypes = ['⚛️', '🐍', '🔷', '☁️', '🗄️', '🐳', '🔧', '📊'];
    
    for (let i = 0; i < 8; i++) {
        gameState.skills.push({
            x: Math.random() * (gameState.canvas.width - 40) + 20,
            y: Math.random() * (gameState.canvas.height - 40) + 20,
            size: 20,
            type: skillTypes[i % skillTypes.length],
            collected: false
        });
    }
    
    // Set up keyboard listeners
    document.addEventListener('keydown', handleGameKeyDown);
    document.addEventListener('keyup', handleGameKeyUp);
}

function handleGameKeyDown(e) {
    if (!gameState.active) return;
    gameState.keys[e.key.toLowerCase()] = true;
    
    // Prevent default for game keys
    if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
}

function handleGameKeyUp(e) {
    if (!gameState.active) return;
    gameState.keys[e.key.toLowerCase()] = false;
}

function updateGame() {
    if (gameState.paused) return;
    
    // Move player
    const speed = 5;
    if (gameState.keys['w'] || gameState.keys['arrowup']) {
        gameState.player.y = Math.max(gameState.player.size, gameState.player.y - speed);
    }
    if (gameState.keys['s'] || gameState.keys['arrowdown']) {
        gameState.player.y = Math.min(gameState.canvas.height - gameState.player.size, gameState.player.y + speed);
    }
    if (gameState.keys['a'] || gameState.keys['arrowleft']) {
        gameState.player.x = Math.max(gameState.player.size, gameState.player.x - speed);
    }
    if (gameState.keys['d'] || gameState.keys['arrowright']) {
        gameState.player.x = Math.min(gameState.canvas.width - gameState.player.size, gameState.player.x + speed);
    }
    
    // Check skill collection
    gameState.skills.forEach(skill => {
        if (!skill.collected) {
            const distance = Math.sqrt(
                Math.pow(gameState.player.x - skill.x, 2) + 
                Math.pow(gameState.player.y - skill.y, 2)
            );
            
            if (distance < gameState.player.size + skill.size) {
                skill.collected = true;
                gameState.score += 10;
                playCollectSound();
                
                // Check if all skills collected
                if (gameState.skills.every(s => s.collected)) {
                    nextLevel();
                }
            }
        }
    });
    
    updateScoreDisplay();
}

function renderGame() {
    const ctx = gameState.ctx;
    
    // Clear canvas
    ctx.clearRect(0, 0, gameState.canvas.width, gameState.canvas.height);
    
    // Draw player
    ctx.fillStyle = gameState.player.color;
    ctx.beginPath();
    ctx.arc(gameState.player.x, gameState.player.y, gameState.player.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw player emoji
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('👨‍💻', gameState.player.x, gameState.player.y + 5);
    
    // Draw skills
    gameState.skills.forEach(skill => {
        if (!skill.collected) {
            ctx.font = '24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(skill.type, skill.x, skill.y + 5);
        }
    });
    
    // Draw pause overlay
    if (gameState.paused) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, gameState.canvas.width, gameState.canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED', gameState.canvas.width / 2, gameState.canvas.height / 2);
    }
}

function startGameLoop() {
    gameState.gameLoop = setInterval(() => {
        updateGame();
        renderGame();
    }, 1000 / 60); // 60 FPS
}

function toggleGamePause() {
    gameState.paused = !gameState.paused;
    const pauseBtn = document.querySelector('#portfolio-game button');
    pauseBtn.innerHTML = gameState.paused ? '▶️ Resume' : '⏸️ Pause';
}

function toggleGameMute() {
    gameState.muted = !gameState.muted;
    const muteBtn = document.getElementById('game-mute-btn');
    muteBtn.innerHTML = gameState.muted ? '🔇 Muted' : '🔊 Sound';
}

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('game-score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${gameState.score} | Level: ${gameState.level}`;
    }
}

function nextLevel() {
    gameState.level++;
    
    // Add more skills for next level
    const skillTypes = ['⚛️', '🐍', '🔷', '☁️', '🗄️', '🐳', '🔧', '📊', '🚀', '🎯', '🔥', '💎'];
    const newSkillCount = Math.min(8 + gameState.level, 16);
    
    gameState.skills = [];
    for (let i = 0; i < newSkillCount; i++) {
        gameState.skills.push({
            x: Math.random() * (gameState.canvas.width - 40) + 20,
            y: Math.random() * (gameState.canvas.height - 40) + 20,
            size: 20,
            type: skillTypes[i % skillTypes.length],
            collected: false
        });
    }
    
    showNotification(`🎉 Level ${gameState.level}! Collect all ${newSkillCount} skills!`, 'success');
}

function playCollectSound() {
    if (gameState.muted) return;
    
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

function closePortfolioGame() {
    gameState.active = false;
    gameState.paused = false;
    
    // Clear game loop
    if (gameState.gameLoop) {
        clearInterval(gameState.gameLoop);
    }
    
    // Remove event listeners
    document.removeEventListener('keydown', handleGameKeyDown);
    document.removeEventListener('keyup', handleGameKeyUp);
    
    // Remove game container
    const gameContainer = document.getElementById('portfolio-game');
    if (gameContainer) {
        gameContainer.remove();
    }
    
    // Reset game state
    gameState.score = 0;
    gameState.level = 1;
    gameState.skills = [];
    
    showNotification(`🎮 Game Over! Final Score: ${gameState.score}`, 'info');
}