/**
 * Created by ohs60275 on 2017/08/10.
 */
// webpack.configは設定ファイル。つまり、変換指示書
// Reactを変換するためのwebpackの設定ファイル
const path = require('path')
const webpack = require('webpack')
// 変換対象から除外するモジュール
const externalPlugins = new webpack.ExternalsPlugin('commonjs',[
    'app',
    'auto-updater',
    'browser-window',
    'content-tracing',
    'dialog',
    'electron',
    'global-shortcut',
    'ipc',
    'menu',
    'menu',
    'menu-item',
    'fs',
    'power-monitor',
    'protocol',
    'tray',
    'remote',
    'web-frame',
    'clipboard',
    'crash-reporter',
    'screen',
    'shell'
])

module.exports = {
    entry: {
        index:path.join(__dirname, '/view/app', 'index.js'),
        login:path.join(__dirname, '/view/login', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                options: {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        externalPlugins
    ]
}