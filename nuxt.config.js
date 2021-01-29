export default {
  head: {
    title: 'steam-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project.
    // '@/assets/css/variables.scss',
    // '@/assets/css/colors.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Icons
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['faCog', 'faSearch'],
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  styleResources: {
    scss: [
      'assets/css/colors.scss',
      'assets/css/variables.scss',
      'assets/css/common.scss',
    ],
  },
  /*
   ** Build configuration
   */
  build: {},
  webfontloader: {
    google: {
      families: ['Google+Sans:400,700'],
    },
  },
  dir: {
    utils: 'utils',
  },
}
