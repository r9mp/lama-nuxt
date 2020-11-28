/* Nuxt.js configuration
 */
import auth from './config/auth'
import i18n from './config/i18n'
import sitemap from './config/sitemap'
import toast from './config/toast'

export default {
  head: {
    title: 'Lama Project - Lama Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  loading: {
    color: '#fff',
  },
  css: [],
  styleResources: {
    less: [],
    sass: [],
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_main.scss'],
    stylus: [],
  },
  plugins: [],
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/auth-module https://auth.nuxtjs.org/guide/setup.html
    '@nuxtjs/auth',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://github.com/nuxt-community/modules/tree/master/packages/component-cache
    '@nuxtjs/component-cache',
    // https://github.com/nuxt-community/modules/tree/master/packages/toast
    ['@nuxtjs/toast', toast],
    // https://github.com/nuxt-community/nuxt-i18n
    'nuxt-i18n',
    // ['@nuxtjs/robots', robots],
    '@nuxtjs/sitemap',
  ],
  axios: {},
  build: {
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {
      /*
       * Run ESLINT on save
       */
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      presets({ envName }) {
        const envTargets = {
          client: { browsers: ['last 2 versions'], ie: 9 },
          server: { node: 12 },
        }
        return [
          [
            '@nuxt/babel-preset-app',
            {
              targets: envTargets[envName],
            },
          ],
        ]
      },
    },
  },
  router: {
    middleware: ['auth'],
    base: '/',
    linkExactActiveClass: 'active',
    trailingSlash: false,
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: true,
  },

  // global modules configuration
  auth,
  i18n,
  sitemap,
}
