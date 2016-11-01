var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var striptags = require('./strip-tags')
// var md = require('markdown-it')()

module.exports = {
  entry: {
    app: './examples/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.md'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  vueMarkdown: {
    preprocess: function (markdownIt, source) {
      // do any thing
      markdownIt.renderer.rules.table_open = function () {
        return '<table class="table table-bordered">'
      }
      markdownIt.renderer.rules.fence = wrap(markdownIt.renderer.rules.fence)

      return source
    },
    use: [
      [require('markdown-it-container'), 'demo', {
        validate: function (params) {
          return params.trim().match(/^demo\s*(.*)$/)
        },

        render: function (tokens, idx) {
          // var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
          if (tokens[idx].nesting === 1) {
            // var description = (m && m.length > 1) ? m[1] : ''
            var html = convert(striptags(tokens[idx + 1].content, 'script'))
            // var descriptionHTML = description
            //   ? '<div class="description">' + md.render(description) + '</div>'
            //   : ''
            return `<div class="bs-example">${html}</div>
                    <div class="highlight">`
          }
          return '</div></div>\n'
        }
      }]
    ]
  }
}

function wrap (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

function convert (str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}
