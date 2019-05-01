import NuxtConfiguration from '@nuxt/config'
import { resolve } from 'path'
const pkg = require('./package')

const config: NuxtConfiguration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    ['nuxt-stylus-resources-loader', [
      resolve(__dirname, 'assets/styl/mixins.styl'),
      resolve(__dirname, 'assets/styl/variables.styl')
    ]],
  ],

  /**
   * Apollo module configuration
   */
  apollo: {
    clientConfigs: {
      default: {
	httpEndpoint: 'http://localhost:4000',
	httpLinkOptions: {
          credentials: 'same-origin'
	},
	wsEndpoint: 'ws://localhost:4000',
	persisting: true,
      },
      test: {
        httpEndpoint: 'http://localhost:5000',
	wsEndpoint: 'ws://localhost:5000',
	tokenName: 'apollo-token'
      }
    }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config