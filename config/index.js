// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"',
            MODEL_ENV: JSON.stringify(process.env.MODEL_ENV) || '"match"'
        },
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    test: {
        env: {
            NODE_ENV: '"test"',
            MODEL_ENV: JSON.stringify(process.env.MODEL_ENV) || '"match"'
        },
        // index: path.resolve(__dirname, '../dist/index.html'),
        // assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    devp: {
        env: {
            NODE_ENV: '"devp"',
            MODEL_ENV: JSON.stringify(process.env.MODEL_ENV) || '"match"'
        },
        // index: path.resolve(__dirname, '../dist/index.html'),
        // assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"',
            MODEL_ENV: JSON.stringify(process.env.MODEL_ENV) || '"match"'
        },
        port: 8080,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径
            '/sms',
            '/user',
            '/oss',
            '/creation',
            '/message',
            '/share',
            '/page',
            '/banner',
            '/activity',
            '/h5',
            '/app/record'
        ],
        proxypath: 'http://t.zxp.jimicn.com',
        // proxypath: 'http://192.168.1.232:8090',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}