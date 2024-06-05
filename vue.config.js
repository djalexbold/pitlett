const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://pitlett',
        ws: true,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
})
