// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//       ? '/Restaurant_Menu_Frontend/'
//       : '/'
//   }

//   console.log(publicPath);

  
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/'
})