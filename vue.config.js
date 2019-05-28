// vue.config.js
const BaseUrl = require("./src/axios/config.js")
const webpack = require('webpack')
module.exports = {
    devServer: {
        proxy: {
            [BaseUrl.ROOT]: {
                target: BaseUrl.URL,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    [`^${BaseUrl.ROOT}`]: "/"
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    }
}
