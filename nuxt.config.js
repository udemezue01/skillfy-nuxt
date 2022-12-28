export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skillfy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],
  //Firebase configuration.

  firebase: {
    config: {
      apiKey: 'AIzaSyBiK5-XzeFP-HaHVpI3vWYQPrm8V77i-ks',
      authDomain: 'skillfy-d2b30.firebaseapp.com',
      projectId: 'skillfy-d2b30',
      storageBucket: 'skillfy-d2b30.appspot.com',
      messagingSenderId: '815680215057',
      appId: '1:815680215057:web:0560012b0a94678417b9b0',
      measurementId: 'G-ZJ8SFPGTLC'
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
 },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  }
}
