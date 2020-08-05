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
  pages: pagesEntry('./src/pages/*')
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
