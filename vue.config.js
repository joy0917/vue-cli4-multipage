module.exports = {
  // 基本 URL
  publicPath: './',
  // 静态资源目录
  assetsDir: 'assets',
  // eslint
  lintOnSave: true,
  // 生产环境的 source map
  productionSourceMap: false,
  // multi-page 模式
  pages: {
    index: {
      // page 的入口
      entry: 'src/views/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页',
      // 在这个页面中包含的块，默认情况下会包含 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      // page 的入口
      entry: 'src/views/about/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'about.html',
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '关于我们',
      // 在这个页面中包含的块，默认情况下会包含 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  }
}
