import { defineConfig } from 'vitepress'
import sidebar from './routes/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JavaScript 入门教程",
  description: "开始编写JavaScript代码吧",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档',
        items: [
          { text: 'JavaScript 教程', link: '/js/get-started' },
          { text: 'TypeScript 入门进程', link: '/ts/get-started' },
        ],
      }
    ],
    logo: {
      src: '/assets/vite.svg',
      alt: 'logo'
    },
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Logic Lee'
    }
  }
})
