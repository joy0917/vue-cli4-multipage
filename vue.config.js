const path = require('path')
const glob = require('glob')

module.exports = {
  // 基本 URL
  publicPath: '/',
  // 静态资源目录
  assetsDir: 'assets',
  // eslint
  lintOnSave: true,
  // 生产环境的 source map
  productionSourceMap: false,
  // multi-page 模式
  pages: pagesEntry('./src/pages/*'),
  // 代理
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: '', // 测试环境
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { // 遇见/api才做代理，但真实的请求中没有/api,这样既有了标识, 又能在请求接口中把/api去掉
          '^/api': ''
        }
      }
    }
  }
}

// 配置pages参数
function pagesEntry (entry) {
  const entries = {}
  glob.sync(entry).forEach(item => {
    const fileName = path.basename(item, path.extname(item))
    entries[fileName] = {
      // 入口文件
      entry: 'src/pages/' + fileName + '/main.js',
      // 模板文件
      template: 'public/index.html',
      // 输入文件
      filename: fileName + '.html',
      // 自定义参数
      title: setMeta(fileName).title,
      keywords: setMeta(fileName).keywords,
      description: setMeta(fileName).description
    }
  })
  return entries
}

// 配置自定义参数
function setMeta (fileName) {
  let meta = {}
  switch (fileName) {
    case 'index':
      meta = {
        title: '首页'
      }
      break
    case 'about':
      meta = {
        title: '关于我们'
      }
      break
    default:
      meta = {
        title: '标题'
      }
      break
  }
  return Object.assign({
    keywords: '关键词',
    description: '关键描述'
  }, meta)
}
