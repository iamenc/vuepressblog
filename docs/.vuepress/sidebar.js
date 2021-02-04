module.exports = {
    '/demo/': [{
            title: 'Group 1', // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 0, // 可选的, 默认值是 1
            children: [
                { title: "home", path: "/demo/" },
                { title: "demo2", path: "/demo/demo1/Demo.md" },
            ]
        },
        {
            title: "grep2",
            path: "/demo/"
        },
    ],
    '/sundry/': [
        { title: "python源pip源conda源配置", path: "/sundry/python源pip源conda源配置" }
    ]
}