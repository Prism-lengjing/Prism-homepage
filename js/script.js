document.addEventListener('DOMContentLoaded', () => {
    // 1. 读取设置
    let currLang = localStorage.getItem('lang') || 'zh';
    let currTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currTheme);
    
    // 2. 渲染内容
    renderCommonElements();
    renderPageContent();

    // 3. 启动滚动动画
    initScrollAnimations();

    function renderCommonElements() {
        const t = siteData.i18n[currLang];
        
        // 渲染导航
        const navHTML = `
            <div class="logo">${siteData.config.teamName}</div>
            <nav>
                <ul>
                    <li><a href="index.html" class="${isActive('index.html')}">${t.nav[0]}</a></li>
                    <li><a href="about.html" class="${isActive('about.html')}">${t.nav[1]}</a></li>
                    <li><a href="members.html" class="${isActive('members.html')}">${t.nav[2]}</a></li>
                    <li><a href="projects.html" class="${isActive('projects.html')}">${t.nav[3]}</a></li>
                    <li><a href="contact.html" class="${isActive('contact.html')}">${t.nav[4]}</a></li>
                </ul>
            </nav>
            <div class="controls">
                <button id="langBtn" class="btn-icon">${currLang === 'zh' ? 'EN' : '中'}</button>
                <button id="themeBtn" class="btn-icon">${currTheme === 'light' ? '🌙' : '☀️'}</button>
            </div>
        `;
        document.querySelector('header').innerHTML = navHTML;
        document.querySelector('footer').innerHTML = `<p>${t.footer}</p>`;

        document.getElementById('langBtn').addEventListener('click', () => {
            localStorage.setItem('lang', currLang === 'zh' ? 'en' : 'zh');
            location.reload();
        });
        document.getElementById('themeBtn').addEventListener('click', () => {
            currTheme = currTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currTheme);
            localStorage.setItem('theme', currTheme);
            // 触发自定义事件通知粒子特效更新
            document.dispatchEvent(new Event('themeChanged'));
            document.getElementById('themeBtn').innerText = currTheme === 'light' ? '🌙' : '☀️';
        });
        document.getElementById('themeBtn').innerText = currTheme === 'light' ? '🌙' : '☀️';
    }

    function renderPageContent() {
        const page = window.location.pathname.split("/").pop() || 'index.html';
        const t = siteData.i18n[currLang];
        const container = document.getElementById('content-area');
        if (!container) return;

        let html = '';

        if (page === 'index.html') {
            html = `
                <section class="hero fade-in-up">
                    <h1>${t.hero.title}</h1>
                    <p>${t.hero.subtitle}</p>
                    <a href="projects.html" class="cta-btn">${t.hero.cta}</a>
                </section>
            `;
        }
        else if (page === 'members.html') {
            html = `<h2 class="section-title fade-in-up">${t.titles.members}</h2><div class="grid">`;
            siteData.members.forEach((m, i) => {
                html += `
                    <div class="card fade-in-up" style="transition-delay: ${i*100}ms">
                        <img src="${m.avatar}">
                        <h3>${m.name}</h3>
                        <p style="color:var(--accent-color);font-weight:bold">${m.role}</p>
                        <p style="font-size:0.9em">${currLang==='zh'?m.desc_zh:m.desc_en}</p>
                    </div>`;
            });
            html += `</div>`;
        }
        else if (page === 'projects.html') {
            html = `<h2 class="section-title fade-in-up">${t.titles.projects}</h2><div class="grid">`;
            siteData.projects.forEach((p, i) => {
                let tags = p.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                html += `
                    <div class="card fade-in-up" style="transition-delay: ${i*100}ms">
                        <h3>${p.title}</h3>
                        <p style="margin:10px 0">${currLang==='zh'?p.desc_zh:p.desc_en}</p>
                        <div>${tags}</div>
                    </div>`;
            });
            html += `</div>`;
        }
        else if (page === 'about.html') {
            html = `<h2 class="section-title fade-in-up">${t.titles.about}</h2>
                    <p class="fade-in-up" style="margin-bottom:40px; font-size:1.1rem">
                        ${currLang==='zh'?"我们是充满激情的技术团队。":"We are a passionate tech team."}
                    </p>
                    <h2 class="section-title fade-in-up">${t.titles.timeline}</h2>
                    <div class="timeline">`;
            siteData.timeline.forEach((item, i) => {
                html += `
                    <div style="margin-bottom:20px; border-left:2px solid var(--accent-color); padding-left:15px;" class="fade-in-up" style="transition-delay: ${i*100}ms">
                        <span style="font-weight:bold; color:var(--accent-color)">${item.year}</span>
                        <h3>${currLang==='zh'?item.title_zh:item.title_en}</h3>
                        <p>${currLang==='zh'?item.desc_zh:item.desc_en}</p>
                    </div>`;
            });
            html += `</div>`;
        }
        else if (page === 'contact.html') {
            html = `
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px;">
                    <div class="fade-in-up">
                        <h2 class="section-title">${t.titles.contact}</h2>
                        <form id="contactForm">
                            <input type="text" name="from_name" placeholder="${t.form.name}" required>
                            <input type="email" name="from_email" placeholder="${t.form.email}" required>
                            <textarea name="message" rows="5" placeholder="${t.form.message}" required></textarea>
                            <button type="submit" id="submitBtn">${t.form.submit}</button>
                            <p id="formStatus" style="margin-top:10px"></p>
                        </form>
                    </div>
                    <div class="fade-in-up" style="transition-delay: 200ms">
                        <h2 class="section-title">${t.titles.links}</h2>
                        <ul style="list-style:none">
                            ${siteData.links.map(l => `<li style="margin-bottom:10px"><a href="${l.url}" target="_blank" style="font-size:1.1rem">➜ ${l.name}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>`;
        }

        container.innerHTML = html;

        // 绑定邮件发送事件
        if(page === 'contact.html') {
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = document.getElementById('submitBtn');
                const status = document.getElementById('formStatus');
                const originalText = btn.innerText;
                
                btn.innerText = 'Sending...';
                btn.disabled = true;

                // ⚠️ 替换这里: 你的 Service ID 和 Template ID
                const SERVICE_ID = 'service_nq02k3k'; 
                const TEMPLATE_ID = 'template_m4dpqp5';

                emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
                    .then(() => {
                        btn.innerText = 'Success!';
                        status.innerText = '✅ Message sent!';
                        status.style.color = 'green';
                        form.reset();
                        setTimeout(() => { btn.innerText = originalText; btn.disabled = false; }, 3000);
                    }, (err) => {
                        btn.innerText = 'Failed';
                        btn.disabled = false;
                        status.innerText = '❌ Error: ' + JSON.stringify(err);
                        status.style.color = 'red';
                    });
            });
        }
    }

    function isActive(path) {
        const current = window.location.pathname.split("/").pop() || 'index.html';
        return current === path ? 'active' : '';
    }

    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        setTimeout(() => {
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        }, 100);
    }
});