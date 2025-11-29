const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray;

// 1. 获取颜色配置 (暗色用青，亮色用深灰)
function getThemeColor() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark ? 'rgba(69, 162, 158,' : 'rgba(44, 62, 80,';
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, dirX, dirY, size) {
        this.x = x; this.y = y; 
        this.dirX = dirX; this.dirY = dirY; 
        this.size = size;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = getThemeColor() + '0.8)';
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) this.dirX = -this.dirX;
        if (this.y > canvas.height || this.y < 0) this.dirY = -this.dirY;
        this.x += this.dirX;
        this.y += this.dirY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 10000; // 密度
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * (innerWidth - size * 2) + size * 2);
        let y = (Math.random() * (innerHeight - size * 2) + size * 2);
        let dirX = (Math.random() * 0.4) - 0.2;
        let dirY = (Math.random() * 0.4) - 0.2;
        particlesArray.push(new Particle(x, y, dirX, dirY, size));
    }
}

function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + 
                           ((particlesArray[a].y - particlesArray[b].y) ** 2);
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                let opacity = 1 - (distance / 20000);
                ctx.strokeStyle = getThemeColor() + opacity + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particlesArray.forEach(p => p.update());
    connect();
}

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

// 监听主题切换事件 (来自 script.js)
document.addEventListener('themeChanged', () => { init(); });

init();
animate();