# 

# 🚀 Prism-homepage (团队官网)

> 一个极简、高性能的静态团队官网。采用纯 HTML/CSS/JS 构建，支持夜间模式、中英切换、粒子特效及邮件推送。

## ✨ 特性 (Features)

*   **轻量级架构**：无复杂框架（React/Vue），纯原生技术栈，加载速度极快。
*   **数据分离设计**：所有文案、成员、项目数据均存储于 `js/data.js`，修改内容无需改动 HTML 结构。
*   **双重主题**：支持 **极简白 (Light)** 与 **赛博黑 (Dark)** 模式切换，配备磨砂玻璃质感 UI。
*   **视觉特效**：手写 Canvas 粒子连线背景，随主题色自动变换。
*   **多语言支持**：内置中/英双语切换逻辑。
*   **无后端交互**：集成 EmailJS，支持静态页面直接发送邮件通知。

## 📂 目录结构 (Directory Structure)

```text
my-team-site/
├── index.html        # 首页
├── about.html        # 关于我们 & 发展历程
├── members.html      # 成员介绍
├── projects.html     # 项目展示
├── contact.html      # 联系我们
├── css/
│   └── style.css     # 核心样式 (含动画、响应式、主题变量)
└── js/
    ├── data.js       # 📝 [核心] 网站内容数据中心
    ├── script.js     # ⚙️ [逻辑] 页面渲染、交互与邮件发送
    └── particles.js  # 🎨 [特效] 粒子背景动画
```

## 🛠️ 如何配置与修改 (Configuration)

### 1. 修改网站内容
打开 `js/data.js`，这是你唯一需要经常打交道的文件。
*   **基本信息**：修改 `config` 对象下的团队名称。
*   **成员管理**：在 `members` 数组中添加/删除对象即可增减成员。
*   **项目展示**：在 `projects` 数组中管理你的作品集。
*   **多语言文案**：在 `i18n` 对象下分别修改 `zh` (中文) 和 `en` (英文) 的内容。

### 2. 配置邮件发送 (EmailJS)
本项目使用 EmailJS 实现静态表单发送。如果你 fork 了本项目，请务必替换为你自己的 Key。

**步骤 A：替换 Public Key**
在所有 `.html` 文件的 `<head>` 标签中找到以下代码并修改：
```html
<script type="text/javascript">
   (function(){
      // 替换为你自己的 Public Key
      emailjs.init("YOUR_PUBLIC_KEY");
   })();
</script>
```

**步骤 B：替换 Service ID & Template ID**
打开 `js/script.js`，找到 `renderPageContent` 函数中的 `contact.html` 部分：
```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';   // 替换你的 Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // 替换你的 Template ID
```

### 3. 更换图片
你可以直接将图片放在新建的 `images/` 文件夹内，然后在 `data.js` 中引用相对路径（如 `images/avatar.jpg`），或者继续使用网络图床链接。

## 🚀 本地运行 (Local Development)

由于使用了 ES6 模块或跨域资源（EmailJS），建议使用本地服务器运行，而不是直接双击 HTML 文件。

1.  如果你使用 **VS Code**：
    *   安装插件 "Live Server"。
    *   右键点击 `index.html` -> 选择 "Open with Live Server"。

2.  或者使用 Python：
    ```bash
    # 在项目根目录下运行
    python -m http.server 8000
    ```
    然后在浏览器访问 `http://localhost:8000`。

## 📦 部署 (Deployment)

本项目完全适配 **GitHub Pages**。

1.  将代码提交到 GitHub 仓库。
2.  进入仓库 **Settings** -> **Pages**。
3.  在 **Build and deployment** 下，Branch 选择 `main` (或 master)，文件夹选择 `/(root)`。
4.  点击 **Save**，等待几分钟即可访问。

## 📄 许可证 (License)

本项目遵循 **Apache License 2.0** 协议。

你可以自由地使用、修改和分发本项目，但如果你修改了文件，需要保留原始的版权声明。详情请参阅 [LICENSE](LICENSE) 文件。
