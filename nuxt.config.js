const Sass = require('sass')

export default {
  // server: {
  //   host: '0' // default: localhost
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // create a static page
  target: 'static',

  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'V A L E N T O N',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'content from config' },
      { hid: 'author', name: 'author', content: 'alles-negativ.ch' },
      { hid: 'keywords', name: 'keywords', content: 'Valenton,Audio,Beratung,Planung,Installation,elektroakustischen Anlagen,Instrumente' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
      { hid: 'robots', name: 'robots', content: 'all' },
      { hid: 'referrer', name: 'referrer', content: 'no-referrer-when-downgrade' },
      { hid: 'og:locale', property: 'og:locale', content: 'de_CH' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Valenton' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Valenton' },
      { hid: 'og:description', property: 'og:description', content: 'Valenton bietet Beratung, Planung und Installation von elektroakustischen Anlagen.' },
      { hid: 'og:image', property: 'og:image', content: 'https://valenton.ch/valenton-static-image.jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2121' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1414' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Example alt text for og:image' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // include scripts in static folder here
      // {src: "/script.js"}
    ]
  },

  publicRuntimeConfig: {
    kirby: {
      url: process.env.KIRBY_SITE,
      username: process.env.KIRBY_USERNAME,
      password: process.env.KIRBY_PASSWORD
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/nuxt-kirby-kql',
    '~/plugins/preview.client.js',
    { src: '~/plugins/VueFlickity.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/device',
    '@nuxt/image',
    // '@nuxtjs/html-validator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/moment'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass
      }
    },
    extend(config, ctx) {
      // You can extend webpack config here
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js";
    }
  },

  axios: {
    proxy: false // Can be also an object with default options
  },

  proxy: {
  },

  image: {
    domains: [
      'http://localhost:8888',
      'https://backend.valenton.ch'
    ]
  }
}
