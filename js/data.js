const siteData = {
    config: {
        teamName: "NovaDev",
        email: "contact@novadev.com"
    },
    i18n: {
        zh: {
            nav: ["首页", "关于我们", "成员", "项目", "联系"],
            titles: {
                about: "关于我们",
                timeline: "发展历程",
                members: "核心成员",
                projects: "精选项目",
                contact: "联系我们",
                links: "友情链接"
            },
            hero: {
                title: "构建数字未来",
                subtitle: "极简设计与硬核技术的完美融合",
                cta: "查看项目"
            },
            form: {
                name: "您的姓名",
                email: "您的邮箱",
                message: "留言内容",
                submit: "发送消息"
            },
            footer: "© 2024 NovaDev Team. All rights reserved."
        },
        en: {
            nav: ["Home", "About", "Members", "Projects", "Contact"],
            titles: {
                about: "About Us",
                timeline: "Timeline",
                members: "Core Team",
                projects: "Projects",
                contact: "Contact Us",
                links: "Links"
            },
            hero: {
                title: "Building the Future",
                subtitle: "Fusion of minimalist design and hardcore tech.",
                cta: "View Projects"
            },
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "Message",
                submit: "Send Message"
            },
            footer: "© 2024 NovaDev Team. All rights reserved."
        }
    },
    members: [
        {
            name: "Alex Chen",
            role: "Founder",
            desc_zh: "十年全栈开发经验。",
            desc_en: "10 years full-stack exp.",
            avatar: "https://ui-avatars.com/api/?name=Alex+Chen&background=random"
        },
        {
            name: "Sarah Wu",
            role: "Designer",
            desc_zh: "专注于极致的用户体验。",
            desc_en: "Focus on ultimate UX.",
            avatar: "https://ui-avatars.com/api/?name=Sarah+Wu&background=random"
        },
        {
            name: "Mike Zhang",
            role: "Backend",
            desc_zh: "高并发架构专家。",
            desc_en: "High concurrency expert.",
            avatar: "https://ui-avatars.com/api/?name=Mike+Zhang&background=random"
        }
    ],
    projects: [
        {
            title: "Project Alpha",
            desc_zh: "基于AI的代码辅助工具。",
            desc_en: "AI-based code assistant.",
            tags: ["React", "Python"],
            link: "#"
        },
        {
            title: "Neon Dashboard",
            desc_zh: "赛博朋克风格的大屏。",
            desc_en: "Cyberpunk visualization.",
            tags: ["Vue", "D3.js"],
            link: "#"
        },
        {
            title: "Nova App",
            desc_zh: "下一代社交应用。",
            desc_en: "Next-gen social app.",
            tags: ["Flutter", "Go"],
            link: "#"
        }
    ],
    timeline: [
        { year: "2023", title_zh: "团队成立", title_en: "Founded", desc_zh: "我们在大学宿舍起步。", desc_en: "Started in dorm." },
        { year: "2024", title_zh: "产品发布", title_en: "Launched", desc_zh: "获得首批用户。", desc_en: "Got first users." }
    ],
    links: [
        { name: "GitHub", url: "https://github.com" },
        { name: "Twitter", url: "https://twitter.com" }
    ]
};