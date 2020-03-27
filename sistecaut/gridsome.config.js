// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'sistecautProject',
  siteDescription: 'A simple, beautiful & minimalistic project using Gridsome',
  siteUrl: 'https://sistecautproject.netlify.com',
  plugins: [],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  icon: {
    favicon: {
      src: './src/assets/icons/logo (1).png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/assets/icons/logo (1).png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  }
}
