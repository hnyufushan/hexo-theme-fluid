const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "小于博客",
  description: '💻学习📝记录🔗分享\n学无止境是永远前进的基础，跃然纸上是对知识的总结交代，与众分享则是实现价值的最好方式。',
  base: '/hexo-theme-fluid/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },


  head,
  plugins,
  themeConfig,
}
