module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/*': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}
