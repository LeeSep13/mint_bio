const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|jfif)$/) // 支持 .png, .jpg, .jpeg, .gif, .jfif
      .type('asset/resource') // 使用 asset/resource 而非 url-loader
      .end();

  }
})
