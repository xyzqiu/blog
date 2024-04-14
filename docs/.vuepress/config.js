module.exports = {
    base: '/blog/',
    title: '好好学习',
    description: 'nice',
    themeConfig: {

        nav: [{ text: '首页', link: '/' },
            {
                text: '小秋博客',
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            },],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
            },
            {
                title: "javaBase",
                path: '/javaBase/多线程',
                collapsable: true, 
                children: [
                    { title: "多线程", path: "/javaBase/多线程" },
                    { title: "集合", path: "/javaBase/集合" },
                    { title: "设计模式", path: "/javaBase/设计模式" }
                ],
            },
            {
                title: "mysql",
                path: '/mysql/数据结构',
                collapsable: true, 
                children: [
                    { title: "数据结构", path: "/mysql/数据结构" },
                    { title: "索引", path: "/mysql/索引" },
                    { title: "note", path: "/mysql/note" },
                    { title: "SQL调优", path: "/mysql/SQL调优" }
                ],
            }
        ]
    }
}
