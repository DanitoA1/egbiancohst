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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
   '@/plugins/persistedState.client.js',
   '@/plugins/flutterwave.client.js',
   '@/plugins/vueprint.client.js'

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
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
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
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDjVpfFH4Z69Uo0KhjxCM4abW6mmsHRQSk",
          authDomain: "project-egbiancohst.firebaseapp.com",
          projectId: "project-egbiancohst",
          storageBucket: "project-egbiancohst.appspot.com",
          messagingSenderId: "921999027341",
          appId: "1:921999027341:web:33165c4f8cbb75725586c4"
        },
        services: {
          auth:  {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          },
          firestore: true,
          functions: true,
          storage: true,
          database: true,
        }
      }
    ]
  ],

router : {
  middleware : ['auth']
},



  svgSprite: {
    // manipulate module options
    input: '~/assets/icons/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:'http://localhost:5000/graphql'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
