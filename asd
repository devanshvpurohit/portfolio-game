/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Orbitron', monospace;
    background: #000000;
    color: #ff6b35;
    overflow: hidden;
    cursor: none;
    user-select: none;
}

/* Game Canvas */
#gameCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #1a0a0a 0%, #0a0a0a 50%, #2a1a1a 100%);
    z-index: 1;
}

/* HUD Overlay */
.hud-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 100;
}

.hud-top {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.hud-bottom {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.health-bar, .ammo-counter, .score-counter {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(0, 0, 0, 0.9);
    padding: 8px 15px;
    border: 2px solid #ff0000;
    border-radius: 0;
    backdrop-filter: blur(5px);
}

.ammo-counter {
    border-color: #ff6600;
}

.score-counter {
    border-color: #00ff00;
}

.hud-label {
    color: #00ff00;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Share Tech Mono', monospace;
}

.bar-container {
    width: 120px;
    height: 12px;
    background: #330000;
    border: 1px solid #ff0000;
    position: relative;
    overflow: hidden;
}

.bar {
    height: 100%;
    transition: width 0.3s ease;
}

.health-fill {
    width: 100%;
    background: linear-gradient(90deg, #ff0000, #ff6600);
    animation: pulse 2s infinite;
}

.hud-value {
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    min-width: 30px;
    text-align: center;
}

.weapon-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    padding: 10px 20px;
    border: 2px solid #ff6600;
}

.weapon-name {
    color: #ff6600;
    font-weight: bold;
    font-size: 14px;
}

.reload-indicator {
    color: #00ff00;
    font-size: 12px;
    font-family: 'Share Tech Mono', monospace;
}

.reload-indicator.reloading {
    color: #ff0000;
    animation: blink 0.5s infinite;
}

.enemy-counter {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(0, 0, 0, 0.9);
    padding: 8px 15px;
    border: 2px solid #ff00ff;
}

/* Crosshair */
.crosshair {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 200;
}

.crosshair-inner {
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 0, 0, 0.8);
    border-radius: 50%;
    position: relative;
}

.crosshair-inner::before,
.crosshair-inner::after {
    content: '';
    position: absolute;
    background: rgba(255, 0, 0, 0.8);
}

.crosshair-inner::before {
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    transform: translate(-50%, -50%);
}

.crosshair-inner::after {
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    transform: translate(-50%, -50%);
}

.crosshair.shooting {
    animation: crosshairShoot 0.1s ease-out;
}

/* Portfolio Overlay */
.portfolio-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 500;
    display: none;
    backdrop-filter: blur(10px);
}

.portfolio-overlay.active {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.5s ease-out;
}

.portfolio-close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    background: #ff0000;
    color: #ffffff;
    border: none;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.portfolio-close:hover {
    background: #ff3333;
    transform: scale(1.1);
}

.portfolio-content {
    max-width: 80%;
    max-height: 80%;
    background: rgba(0, 0, 0, 0.9);
    border: 3px solid #ff6600;
    padding: 40px;
    overflow-y: auto;
    animation: slideIn 0.5s ease-out;
}

/* Instructions */
.instructions {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.instruction-panel {
    background: #000000;
    border: 4px solid #ff0000;
    padding: 40px;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 0 50px rgba(255, 0, 0, 0.3);
}

.instruction-panel h2 {
    color: #ff0000;
    font-size: 2rem;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}

.instruction-panel p {
    color: #ffffff;
    margin-bottom: 15px;
    line-height: 1.6;
}

.instruction-panel ul {
    list-style: none;
    margin: 20px 0;
    text-align: left;
}

.instruction-panel li {
    color: #cccccc;
    margin-bottom: 10px;
    padding: 5px 0;
    border-bottom: 1px solid #333;
}

.enemy-type {
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 3px;
}

.enemy-type.red { background: #ff0000; color: #ffffff; }
.enemy-type.blue { background: #0066ff; color: #ffffff; }
.enemy-type.green { background: #00ff00; color: #000000; }
.enemy-type.yellow { background: #ffff00; color: #000000; }
.enemy-type.purple { background: #ff00ff; color: #ffffff; }

.controls {
    margin: 20px 0;
    padding: 15px;
    background: rgba(255, 107, 53, 0.1);
    border: 1px solid #ff6b35;
}

.controls p {
    color: #ff6b35;
    margin-bottom: 5px;
}

/* Buttons */
.doom-button {
    background: linear-gradient(135deg, #330000, #660000);
    border: 2px solid #ff0000;
    color: #ffffff;
    padding: 15px 30px;
    font-family: 'Orbitron', monospace;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
}

.doom-button:hover {
    background: linear-gradient(135deg, #660000, #990000);
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
    transform: translateY(-2px);
}

/* Muzzle Flash */
.muzzle-flash {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #ffff00 0%, #ff6600 30%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    z-index: 150;
}

.muzzle-flash.active {
    animation: muzzleFlash 0.1s ease-out;
}

/* Portfolio Content Styles */
.portfolio-section {
    color: #ffffff;
}

.portfolio-section h2 {
    color: #ff6600;
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(255, 102, 0, 0.5);
}

.portfolio-section h3 {
    color: #ff0000;
    font-size: 1.5rem;
    margin: 20px 0 10px 0;
}

.portfolio-section p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #cccccc;
}

.portfolio-section ul {
    list-style: none;
    margin: 15px 0;
}

.portfolio-section li {
    color: #ffffff;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
}

.portfolio-section li::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ff6600;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.project-card {
    background: rgba(255, 0, 0, 0.1);
    border: 2px solid #ff0000;
    padding: 20px;
    transition: all 0.3s ease;
}

.project-card:hover {
    background: rgba(255, 0, 0, 0.2);
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
}

.skill-bar {
    background: #330000;
    height: 20px;
    margin: 10px 0;
    border: 1px solid #ff0000;
    position: relative;
    overflow: hidden;
}

.skill-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff0000, #ff6600);
    transition: width 1s ease-out;
    position: relative;
}

.skill-label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
}

.contact-form {
    display: grid;
    gap: 15px;
    margin-top: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-group label {
    color: #ff6600;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    background: #000000;
    border: 2px solid #333;
    color: #ffffff;
    padding: 10px;
    font-family: 'Share Tech Mono', monospace;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff6600;
    box-shadow: 0 0 10px rgba(255, 102, 0, 0.3);
}

/* Animations */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes crosshairShoot {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

@keyframes muzzleFlash {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { 
        opacity: 0; 
        transform: translateY(-50px); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hud-top, .hud-bottom {
        flex-direction: column;
        gap: 10px;
        left: 10px;
        right: 10px;
    }
    
    .instruction-panel {
        margin: 20px;
        padding: 20px;
    }
    
    .instruction-panel h2 {
        font-size: 1.5rem;
    }
    
    .portfolio-content {
        max-width: 95%;
        max-height: 90%;
        padding: 20px;
    }
    
    .portfolio-section h2 {
        font-size: 2rem;
    }
    
    .project-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .crosshair {
        width: 30px;
        height: 30px;
    }
    
    .crosshair-inner::before {
        width: 15px;
    }
    
    .crosshair-inner::after {
        height: 15px;
    }
    
    .hud-label, .hud-value {
        font-size: 10px;
    }
    
    .bar-container {
        width: 80px;
        height: 8px;
    }
}
