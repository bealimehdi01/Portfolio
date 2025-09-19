// Simple Particles.js Implementation
function ParticlesJS(elementId, config) {
    const canvas = document.createElement('canvas');
    const container = document.getElementById(elementId);
    const ctx = canvas.getContext('2d');
    
    container.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    
    let particles = [];
    let animationId;
    
    // Default configuration
    const defaults = {
        particles: {
            number: { value: 80 },
            color: { value: '#6366f1' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
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
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    };
    
    // Merge config with defaults
    const settings = Object.assign({}, defaults, config);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * settings.particles.move.speed;
            this.vy = (Math.random() - 0.5) * settings.particles.move.speed;
            this.size = settings.particles.size.random ? 
                Math.random() * settings.particles.size.value : 
                settings.particles.size.value;
            this.opacity = settings.particles.opacity.value;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep particles within bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        
        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = settings.particles.color.value;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function resize() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    
    function init() {
        resize();
        particles = [];
        for (let i = 0; i < settings.particles.number.value; i++) {
            particles.push(new Particle());
        }
    }
    
    function drawLines() {
        if (!settings.particles.line_linked.enable) return;
        
        ctx.globalAlpha = settings.particles.line_linked.opacity;
        ctx.strokeStyle = settings.particles.line_linked.color;
        ctx.lineWidth = settings.particles.line_linked.width;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < settings.particles.line_linked.distance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawLines();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        
        if (settings.interactivity.events.onhover.enable) {
            particles.forEach(particle => {
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < settings.interactivity.modes.repulse.distance) {
                    const force = (settings.interactivity.modes.repulse.distance - distance) / settings.interactivity.modes.repulse.distance;
                    particle.vx -= (dx / distance) * force * 2;
                    particle.vy -= (dy / distance) * force * 2;
                }
            });
        }
    });
    
    container.addEventListener('click', () => {
        if (settings.interactivity.events.onclick.enable) {
            for (let i = 0; i < settings.interactivity.modes.push.particles_nb; i++) {
                particles.push(new Particle());
            }
        }
    });
    
    window.addEventListener('resize', resize);
    
    init();
    animate();
    
    return {
        destroy: () => {
            cancelAnimationFrame(animationId);
            container.removeChild(canvas);
            window.removeEventListener('resize', resize);
        }
    };
}

// Global particlesJS function
window.particlesJS = function(elementId, config) {
    return new ParticlesJS(elementId, config);
};