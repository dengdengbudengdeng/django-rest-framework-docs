import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    favicon: "/favicon.ico",

    hostname: "https://dengdengbudengdeng.github.io",

    author: {
        name: "等等不等等",
        url: "https://github.com/dengdengbudengdeng",
        email: "complex_markup.0f@icloud.com"
    },

    logo: "/delos-logo-light.png",
    logoDark: "/delos-logo-dark.png",

    repo: "dengdengbudengdeng/django-rest-framework-docs",

    docsDir: "src",

    fullscreen: true,

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: "使用 <a href='https://theme-hope.vuejs.press/zh/' target='_blank'>VuePress Theme Hope</a> 主题 | MIT Licensed",
    copyright: "Copyright © 2021-present <a href='https://github.com/dengdengbudengdeng' target='_blank'>等等不等等</a>",
    displayFooter: true,

    // 加密配置
    encrypt: {
        config: {
            "/demo/encrypt.html": ["dolores.abernathy@delos.com"],
        },
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
        align: true,
        attrs: true,
        codeTabs: true,
        component: true,
        demo: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,

        // 取消注释它们如果你需要 TeX 支持
        // markdownMath: {
        //   // 启用前安装 katex
        //   type: "katex",
        //   // 或者安装 mathjax-full
        //   type: "mathjax",
        // },

        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
        // revealjs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 chart.js
        // chartjs: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // 在启用之前安装 sandpack-vue3
        // sandpack: true,
    },

    // 在这里配置主题提供的插件
    plugins: {
        // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
        // comment: {
        //   provider: "Giscus",
        //   repo: "vuepress-theme-hope/giscus-discussions",
        //   repoId: "R_kgDOG_Pt2A",
        //   category: "Announcements",
        //   categoryId: "DIC_kwDOG_Pt2M4COD69",
        // },

        components: {
            components: ["Badge", "VPCard"],
        },

        icon: {
            assets: "fontawesome-with-brands",
        },

        // 设置水印
        watermark: true,
    },
});
