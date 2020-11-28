export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en.js',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr.js',
    },
  ],
  strategy: 'prefix_except_default', // Mandatory for Auth0
  defaultLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  seo: false, // SEO is enabled through layouts: layouts/*.vue
  baseUrl: 'https://fullstack-example.nuxtjs.com',
  parsePages: false,
  pages: {
    'errors/404': {
      en: '/en/errors/404',
      fr: '/fr/erreurs/404',
    },
    'dashboard/index': {
      en: '/en/dashboard',
      fr: '/dashboard',
    },
    'auth/sign-in': false,
  },
}
