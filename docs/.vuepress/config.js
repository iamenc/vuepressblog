// module.exports = {
//     themeConfig: {
//         title: 'dgman \' blog',
//         logo: '/logo.jpg', // 导航栏logo
//         // navbar: false, // 禁用导航栏
//         nav: [
//             { text: '主页', link: '/' },
//             { text: 'deme', link: '/deme' },
//             { // 下拉列表
//                 text: '下拉列表',
//                 ariaLabel: 'Language Menu',
//                 items: [{
//                     text: '编程语言',
//                     items: [
//                         // { text: 'java', link: '/' },
//                         // { text: 'python', link: '/' },
//                     ]
//                 }, ]
//             },
//             { text: '主站点', link: 'http://www.dgman.work' },
//         ],
//         sidebar: 'auto', // 侧边栏配置
//         sidebarDepth: 2, // 侧边栏显示2级
//     }
// }


// module.exports = {
//     title: 'DG',
//     description: 'hhhh',
//     port: 8080,
//     head: [
//         ["link", { rel: "icon", href: "img/logo.png" }],
//         ["link", { rel: "stylesheet", href: "css/style.css" }],
//     ],
//     markdown: {
//         lineNumbers: true,
//     },
//     themeConfig: {
//         logo: '/img/logo.png',
//         nav: require("./nav.js"),
//         sidebar: require("./didebar.js"),
//         collapsable: true, // 可折叠
//         // sidebarDepth: 2,
//         lastUpdated: "Last Updated",
//         searchMaxSuggestoins: 10,
//         serviceWorker: {
//             updatePopup: {
//                 message: '新内容.',
//                 buttonText: "更新",
//             },
//         },
//         editLinks: true,
//         editLinkText: "在x编写此页面"
//     }
// }


module.exports = {
    title: "博客",
    description: "blog",
    port: "8080",
    // base: "/",
    head: [
        ["link", { rel: "icon", href: "/img/logo.png" }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/img/logo.png',
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        collapsable: true,
        // sidebarDepth: 2,
        lastUpdated: "Last Updated",
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: "更新",
            },
        },
        editLinks: true,
        editLinkText: "请在xxx编辑此页 ！",
    },

};