const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withImages(withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}))
