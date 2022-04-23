const dayjs = require('dayjs')
require('dayjs/locale/zh-cn')
const dayjs_plugin_localizedFormat = require('dayjs/plugin/localizedFormat')
module.exports = {
    title:"hwd",
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
        logo: 'logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: '#' },
            { text: 'about', link: '/about/' },
        ],
        sidebar: [
            '/',
        ],
        lastUpdated: '最后更新时间', // string | boolean
    }
}