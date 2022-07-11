export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Egbian College of Sciences  And Technology',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Egbian College of Sciences  And Technology' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: "#0A369D" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
   '@/plugins/persistedState.client.js',
   '@/plugins/vueprint.client.js',
   { src: "~/plugins/vuelidate.client.js" },


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  
  ],

  fontawesome : {
    icons : {
      solid : true,
      brands : true,
   
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-paystack',
    '@nuxtjs/auth-next',
    "vue-toastification/nuxt",
    "cookie-universal-nuxt",
    "@nuxt/postcss8"
   
  ],


axios: {
  baseUrl: process.env.API_HOST_LOCAL,
},
auth: {
  strategies: {
    local: {
      token: {
        property: 'accessToken',
        global: true,
        // required: true,
        type: 'Bearer' //this automagically inject Bearer Token into all API request(Needed or not)
      },
      user: {
        property: 'result',
        autoFetch: true
      },
      endpoints: {
        login: { url: '/user/login', method: 'post'},
        logout: false,
        user: { url: '/user', method: 'get'}
      }
    }
  }
},

  svgSprite: {
    // manipulate module options
    input: '~/assets/icons/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios


  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
