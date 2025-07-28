// Game State
const gameState = {
    canvas: null,
    ctx: null,
    enemies: [],
    bullets: [],
    score: 0,
    health: 100,
    ammo: 30,
    maxAmmo: 30,
    isReloading: false,
    gameStarted: false,
    unlockedSections: new Set(),
    mouseX: 0,
    mouseY: 0
};

// Enemy Types and Portfolio Sections
const enemyTypes = {
    red: { color: '#ff0000', section: 'about', name: 'Red Demon' },
    blue: { color: '#0066ff', section: 'projects', name: 'Blue Imp' },
    green: { color: '#00ff00', section: 'skills', name: 'Green Soldier' },
    yellow: { color: '#ffff00', section: 'experience', name: 'Yellow Cacodemon' },
    purple: { color: '#ff00ff', section: 'contact', name: 'Purple Baron' }
};

// Portfolio Content
const portfolioContent = {
    about: {
        title: 'MARINE PERSONNEL FILE',
        content: `
            <div class="portfolio-section">
                <h2>ABOUT THE MARINE</h2>
                <p>Elite software engineer with extensive combat experience in web development battlegrounds. Specialized in eliminating bugs, optimizing performance, and leading development squads through complex technical missions.</p>
                
                <h3>COMBAT STATISTICS</h3>
                <ul>
                    <li>Years of Service: 5+</li>
                    <li>Missions Completed: 50+</li>
                    <li>Specialization: Full-Stack Development</li>
                    <li>Status: Active and Ready for Deployment</li>
                </ul>
                
                <p>Proven track record of successful deployments across multiple platforms. Expert in modern warfare technologies including React, Node.js, and cloud infrastructure. Ready to eliminate any technical threats that stand in the way of project success.</p>
            </div>
        `
    },
    projects: {
        title: 'MISSION ARCHIVE',
        content: `
            <div class="portfolio-section">
                <h2>COMPLETED OPERATIONS</h2>
                
                <div class="project-grid">
                    <div class="project-card">
                        <h3>OPERATION: E-COMMERCE ASSAULT</h3>
                        <p>Full-scale e-commerce platform deployment with React and Node.js. Eliminated legacy system threats and implemented modern payment processing systems.</p>
                        <p><strong>Technologies:</strong> React, Node.js, MongoDB, Stripe</p>
                        <p><strong>Status:</strong> <span style="color: #00ff00;">SUCCESSFUL</span></p>
                    </div>
                    
                    <div class="project-card">
                        <h3>MISSION: DASHBOARD DOMINATION</h3>
                        <p>Real-time analytics dashboard with advanced data visualization. Neutralized performance bottlenecks and implemented responsive design protocols.</p>
                        <p><strong>Technologies:</strong> Vue.js, D3.js, WebSockets</p>
                        <p><strong>Status:</strong> <span style="color: #00ff00;">SUCCESSFUL</span></p>
                    </div>
                    
                    <div class="project-card">
                        <h3>OPERATION: MOBILE STRIKE</h3>
                        <p>Cross-platform mobile application deployment. Secured user authentication systems and optimized for maximum performance across all devices.</p>
                        <p><strong>Technologies:</strong> React Native, Firebase, JWT</p>
                        <p><strong>Status:</strong> <span style="color: #00ff00;">SUCCESSFUL</span></p>
                    </div>
                </div>
            </div>
        `
    },
    skills: {
        title: 'WEAPON SYSTEMS',
        content: `
            <div class="portfolio-section">
                <h2>COMBAT ARSENAL</h2>
                
                <h3>Frontend Weapons</h3>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 95%"></div>
                    <div class="skill-label">React Plasma Rifle - 95%</div>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 90%"></div>
                    <div class="skill-label">JavaScript Chaingun - 90%</div>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 85%"></div>
                    <div class="skill-label">CSS Shotgun - 85%</div>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 88%"></div>
                    <div class="skill-label">TypeScript Rocket - 88%</div>
                </div>
                
                <h3>Backend Artillery</h3>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 92%"></div>
                    <div class="skill-label">Node.js Heavy Cannon - 92%</div>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 80%"></div>
                    <div class="skill-label">Python Sniper Rifle - 80%</div>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 85%"></div>
                    <div class="skill-label">MongoDB Grenade - 85%</div>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: 78%"></div>
                    <div class="skill-label">AWS Orbital Strike - 78%</div>
                </div>
            </div>
        `
    },
    experience: {
        title: 'SERVICE RECORD',
        content: `
            <div class="portfolio-section">
                <h2>MILITARY SERVICE RECORD</h2>
                
                <h3>Senior Software Engineer - Tech Corp (2021-Present)</h3>
                <ul>
                    <li>Led squad of 5 developers in mission-critical applications</li>
                    <li>Eliminated 200+ bugs and performance bottlenecks</li>
                    <li>Deployed 15+ successful applications to production</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                </ul>
                
                <h3>Full-Stack Developer - StartupBase (2019-2021)</h3>
                <ul>
                    <li>Developed and maintained multiple web applications</li>
                    <li>Collaborated with design team to create responsive interfaces</li>
                    <li>Optimized database queries improving performance by 40%</li>
                    <li>Mentored junior developers in combat techniques</li>
                </ul>
                
                <h3>Frontend Developer - WebForce (2018-2019)</h3>
                <ul>
                    <li>Created interactive user interfaces using React and Vue.js</li>
                    <li>Implemented responsive designs for mobile and desktop</li>
                    <li>Collaborated with UX team to improve user experience</li>
                    <li>Maintained code quality through testing and reviews</li>
                </ul>
            </div>
        `
    },
    contact: {
        title: 'COMMUNICATIONS TERMINAL',
        content: `
            <div class="portfolio-section">
                <h2>ESTABLISH CONTACT</h2>
                
                <p>Ready to join forces? Send a transmission through the secure channel below:</p>
                
                <div class="contact-form">
                    <div class="form-group">
                        <label for="name">SENDER ID:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">SECURE CHANNEL:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">TRANSMISSION DATA:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="doom-button">SEND TRANSMISSION</button>
                </div>
                
                <h3>DIRECT CHANNELS</h3>
                <ul>
                    <li>Email: marine@doomportfolio.dev</li>
                    <li>GitHub: github.com/yourusername</li>
                    <li>LinkedIn: linkedin.com/in/yourprofile</li>
                    <li>Status: <span style="color: #00ff00;">AVAILABLE FOR HIRE</span></li>
                </ul>
            </div>
        `
    }
};

// Initialize Game
function initGame() {
    gameState.canvas = document.getElementById('gameCanvas');
    gameState.ctx = gameState.canvas.getContext('2d');
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    
    // UI event listeners
    document.getElementById('startGame').addEventListener('click', startGame);
    document.getElementById('portfolioClose').addEventListener('click', closePortfolio);
    
    // Start game loop
    gameLoop();
}

function resizeCanvas() {
    gameState.canvas.width = window.innerWidth;
    gameState.canvas.height = window.innerHeight;
}

function startGame() {
    document.getElementById('instructions').style.display = 'none';
    gameState.gameStarted = true;
    spawnEnemies();
    updateHUD();
}

// Enemy Management
function spawnEnemies() {
    const types = Object.keys(enemyTypes);
    const enemyCount = 5;
    
    for (let i = 0; i < enemyCount; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const enemy = {
            id: Math.random(),
            type: type,
            x: Math.random() * (gameState.canvas.width - 100) + 50,
            y: Math.random() * (gameState.canvas.height - 200) + 100,
            size: 30 + Math.random() * 20,
            health: 3,
            maxHealth: 3,
            speed: 0.5 + Math.random() * 1,
            direction: Math.random() * Math.PI * 2,
            lastDirectionChange: Date.now(),
            isHit: false,
            hitTime: 0
        };
        gameState.enemies.push(enemy);
    }
}

function updateEnemies() {
    const now = Date.now();
    
    gameState.enemies.forEach(enemy => {
        // Movement
        if (now - enemy.lastDirectionChange > 2000 + Math.random() * 3000) {
            enemy.direction = Math.random() * Math.PI * 2;
            enemy.lastDirectionChange = now;
        }
        
        enemy.x += Math.cos(enemy.direction) * enemy.speed;
        enemy.y += Math.sin(enemy.direction) * enemy.speed;
        
        // Boundary collision
        if (enemy.x < enemy.size || enemy.x > gameState.canvas.width - enemy.size) {
            enemy.direction = Math.PI - enemy.direction;
        }
        if (enemy.y < enemy.size || enemy.y > gameState.canvas.height - enemy.size) {
            enemy.direction = -enemy.direction;
        }
        
        // Keep in bounds
        enemy.x = Math.max(enemy.size, Math.min(gameState.canvas.width - enemy.size, enemy.x));
        enemy.y = Math.max(enemy.size, Math.min(gameState.canvas.height - enemy.size, enemy.y));
        
        // Reset hit effect
        if (enemy.isHit && now - enemy.hitTime > 200) {
            enemy.isHit = false;
        }
    });
}

function drawEnemies() {
    gameState.enemies.forEach(enemy => {
        const ctx = gameState.ctx;
        const enemyData = enemyTypes[enemy.type];
        
        ctx.save();
        ctx.translate(enemy.x, enemy.y);
        
        // Hit effect
        if (enemy.isHit) {
            ctx.globalAlpha = 0.5;
            ctx.filter = 'brightness(200%)';
        }
        
        // Enemy body
        ctx.fillStyle = enemyData.color;
        ctx.beginPath();
        ctx.arc(0, 0, enemy.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Enemy outline
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Health bar
        const barWidth = enemy.size * 2;
        const barHeight = 6;
        const healthPercent = enemy.health / enemy.maxHealth;
        
        ctx.fillStyle = '#330000';
        ctx.fillRect(-barWidth/2, -enemy.size - 15, barWidth, barHeight);
        
        ctx.fillStyle = healthPercent > 0.5 ? '#00ff00' : healthPercent > 0.25 ? '#ffff00' : '#ff0000';
        ctx.fillRect(-barWidth/2, -enemy.size - 15, barWidth * healthPercent, barHeight);
        
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(-barWidth/2, -enemy.size - 15, barWidth, barHeight);
        
        ctx.restore();
    });
}

// Bullet System
function createBullet(targetX, targetY) {
    if (gameState.ammo <= 0 || gameState.isReloading) return;
    
    const centerX = gameState.canvas.width / 2;
    const centerY = gameState.canvas.height / 2;
    
    const angle = Math.atan2(targetY - centerY, targetX - centerX);
    const speed = 10;
    
    const bullet = {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 100
    };
    
    gameState.bullets.push(bullet);
    gameState.ammo--;
    
    // Visual effects
    showMuzzleFlash();
    animateCrosshair();
}

function updateBullets() {
    gameState.bullets = gameState.bullets.filter(bullet => {
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
        bullet.life--;
        
        // Check collision with enemies
        for (let i = gameState.enemies.length - 1; i >= 0; i--) {
            const enemy = gameState.enemies[i];
            const dx = bullet.x - enemy.x;
            const dy = bullet.y - enemy.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < enemy.size) {
                // Hit enemy
                enemy.health--;
                enemy.isHit = true;
                enemy.hitTime = Date.now();
                
                gameState.score += 10;
                
                if (enemy.health <= 0) {
                    // Enemy defeated
                    gameState.score += 50;
                    unlockPortfolioSection(enemy.type);
                    gameState.enemies.splice(i, 1);
                }
                
                return false; // Remove bullet
            }
        }
        
        // Remove bullet if out of bounds or life expired
        return bullet.life > 0 && 
               bullet.x > 0 && bullet.x < gameState.canvas.width &&
               bullet.y > 0 && bullet.y < gameState.canvas.height;
    });
}

function drawBullets() {
    gameState.ctx.fillStyle = '#ffff00';
    gameState.bullets.forEach(bullet => {
        gameState.ctx.beginPath();
        gameState.ctx.arc(bullet.x, bullet.y, 3, 0, Math.PI * 2);
        gameState.ctx.fill();
        
        // Bullet trail
        gameState.ctx.strokeStyle = '#ff6600';
        gameState.ctx.lineWidth = 2;
        gameState.ctx.beginPath();
        gameState.ctx.moveTo(bullet.x - bullet.vx * 2, bullet.y - bullet.vy * 2);
        gameState.ctx.lineTo(bullet.x, bullet.y);
        gameState.ctx.stroke();
    });
}

// Portfolio System
function unlockPortfolioSection(enemyType) {
    const sectionName = enemyTypes[enemyType].section;
    if (!gameState.unlockedSections.has(sectionName)) {
        gameState.unlockedSections.add(sectionName);
        showPortfolioNotification(enemyType);
        
        // Auto-show portfolio if it's the first unlock
        if (gameState.unlockedSections.size === 1) {
            setTimeout(() => showPortfolio(sectionName), 1500);
        }
    }
}

function showPortfolioNotification(enemyType) {
    const enemyData = enemyTypes[enemyType];
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        border: 3px solid ${enemyData.color};
        color: ${enemyData.color};
        padding: 20px;
        font-family: 'Orbitron', monospace;
        font-weight: bold;
        font-size: 18px;
        z-index: 300;
        text-align: center;
        animation: fadeInOut 3s ease-in-out forwards;
    `;
    notification.innerHTML = `
        <div>ENEMY ELIMINATED!</div>
        <div style="margin: 10px 0; color: #ffffff;">${enemyData.name}</div>
        <div style="color: #00ff00;">PORTFOLIO SECTION UNLOCKED</div>
        <div style="font-size: 14px; margin-top: 10px;">Click to view ${enemyData.section.toUpperCase()}</div>
    `;
    
    notification.addEventListener('click', () => {
        showPortfolio(enemyData.section);
        document.body.removeChild(notification);
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 3000);
}

function showPortfolio(section) {
    const overlay = document.getElementById('portfolioOverlay');
    const content = document.getElementById('portfolioContent');
    
    if (portfolioContent[section]) {
        content.innerHTML = portfolioContent[section].content;
        overlay.classList.add('active');
        
        // Animate skill bars if skills section
        if (section === 'skills') {
            setTimeout(() => {
                const skillFills = content.querySelectorAll('.skill-fill');
                skillFills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
            }, 500);
        }
    }
}

function closePortfolio() {
    document.getElementById('portfolioOverlay').classList.remove('active');
}

// Visual Effects
function showMuzzleFlash() {
    const flash = document.getElementById('muzzleFlash');
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 100);
}

function animateCrosshair() {
    const crosshair = document.getElementById('crosshair');
    crosshair.classList.add('shooting');
    setTimeout(() => crosshair.classList.remove('shooting'), 100);
}

// Weapon System
function reload() {
    if (gameState.isReloading || gameState.ammo === gameState.maxAmmo) return;
    
    gameState.isReloading = true;
    const reloadIndicator = document.getElementById('reloadIndicator');
    reloadIndicator.textContent = 'RELOADING...';
    reloadIndicator.classList.add('reloading');
    
    setTimeout(() => {
        gameState.ammo = gameState.maxAmmo;
        gameState.isReloading = false;
        reloadIndicator.textContent = 'READY';
        reloadIndicator.classList.remove('reloading');
        updateHUD();
    }, 2000);
}

// HUD Updates
function updateHUD() {
    document.getElementById('healthValue').textContent = gameState.health;
    document.getElementById('ammoCount').textContent = gameState.ammo;
    document.getElementById('scoreValue').textContent = gameState.score;
    document.getElementById('enemyCount').textContent = gameState.enemies.length;
    
    // Update health bar
    const healthBar = document.getElementById('healthBar');
    healthBar.style.width = gameState.health + '%';
    
    if (gameState.health < 30) {
        healthBar.style.background = 'linear-gradient(90deg, #ff0000, #ff3333)';
    } else if (gameState.health < 60) {
        healthBar.style.background = 'linear-gradient(90deg, #ff6600, #ff9900)';
    } else {
        healthBar.style.background = 'linear-gradient(90deg, #ff0000, #ff6600)';
    }
}

// Event Handlers
function handleMouseMove(e) {
    gameState.mouseX = e.clientX;
    gameState.mouseY = e.clientY;
    
    // Update crosshair position slightly
    const crosshair = document.getElementById('crosshair');
    const offsetX = (e.clientX - window.innerWidth / 2) * 0.02;
    const offsetY = (e.clientY - window.innerHeight / 2) * 0.02;
    crosshair.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
}

function handleClick(e) {
    if (!gameState.gameStarted) return;
    
    e.preventDefault();
    createBullet(e.clientX, e.clientY);
    updateHUD();
}

function handleKeyDown(e) {
    if (!gameState.gameStarted) return;
    
    switch(e.key.toLowerCase()) {
        case 'r':
            reload();
            break;
        case 'escape':
            closePortfolio();
            break;
    }
}

// Game Loop
function gameLoop() {
    if (gameState.gameStarted) {
        // Clear canvas
        gameState.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        gameState.ctx.fillRect(0, 0, gameState.canvas.width, gameState.canvas.height);
        
        // Update game objects
        updateEnemies();
        updateBullets();
        
        // Draw everything
        drawEnemies();
        drawBullets();
        
        // Update HUD
        updateHUD();
        
        // Check win condition
        if (gameState.enemies.length === 0) {
            setTimeout(() => {
                spawnEnemies();
            }, 2000);
        }
        
        // Auto-reload when empty
        if (gameState.ammo === 0 && !gameState.isReloading) {
            setTimeout(reload, 500);
        }
    }
    
    requestAnimationFrame(gameLoop);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    initGame();
}