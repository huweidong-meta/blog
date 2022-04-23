const dayjs = require('dayjs')
require('dayjs/locale/zh-cn')
const dayjs_plugin_localizedFormat = require('dayjs/plugin/localizedFormat')
module.exports = {
    title:"HuWeiDong",
    plugins: {
            '@vuepress/last-updated': {
                transformer: (timestamp, lang) => {
                dayjs.extend(dayjs_plugin_localizedFormat)
                dayjs.locale('zh-cn')
                return dayjs(timestamp).format('LLLL')
            }
        },
    },
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/home' },
            { text: '快速开始', link: '/guide/guide.md' },
            { text: '扩展', link: '/external/external.md' },
            { text: '关于', link: '/about/about.md' },
        ],
        sidebar: [
            /*'/',*/
        ],
        lastUpdated: '最后更新时间', // string | boolean
    }
}