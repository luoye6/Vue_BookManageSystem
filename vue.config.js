const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
 
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    client: {
      webSocketURL: 'ws://0.0.0.0/ws',
    },
  },
  chainWebpack:config =>{
    //发布模式
    config.when(process.env.NODE_ENV === 'production',config =>{
      config.entry('app').clear().add('./src/main-prod.js')
      
       config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
        })
   
    })
    //开发模式
    config.when(process.env.NODE_ENV === 'development',config =>{
      config.entry('app').clear().add('./src/main-dev.js')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
        })
    })
  }
})