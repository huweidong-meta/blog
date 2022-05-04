const dayjs = require('dayjs')
require('dayjs/locale/zh-cn')
const dayjs_plugin_localizedFormat = require('dayjs/plugin/localizedFormat')

module.exports = {
    head: [['link', { rel: 'icon', href: '/images/icon.jpeg' }]],
    title:"HuWeiDong",
    themeConfig: {
        logo: '/images/logo.jpeg',
        displayAllHeaders: true, // 默认值：false
        activeHeaderLinks: false, // 默认值：true
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/guide/' },
            { text: '其他', link: '/external/external.md' , target:'_self', rel:''},
            { text: '关于', link: '/about/about.md' },
            { text: 'GitHub', link: 'https://github.com' , target:'_blank'},
        ],
        sidebar: [
            {
                title: '篇幅一',   // 必要的
                path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/guide/one','/guide/two',
                ],
            },
            {
                title: '篇幅二',
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/guide/three', '/external/external.md'
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
        lastUpdated: '最后的更新时间', // string | boolean
    },
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                dayjs.extend(dayjs_plugin_localizedFormat)
                dayjs.locale('zh-cn')
                return dayjs(timestamp).format('LLLL')
            }
        },
    },
    markdown: {
        lineNumbers: true
    },
    search: false,
    searchMaxSuggestions: 10
}