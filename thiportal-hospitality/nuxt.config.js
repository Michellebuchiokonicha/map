import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
//   target: 'static',
  head: {
    titleTemplate: '%s - The Hospitality Institute',
    title: 'THI',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
      rel: 'icon',
      type: 'image/x-icon',
      href: '../logo/favicon.ico'
    },
       {
         rel: 'stylesheet',
        //  type: 'image/x-icon',
         href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600,700,800&amp;display=swap"'
       }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/print.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '~/plugins/app_toast',
      ssr: false
    },
    {
      src: '~/plugins/moment',
      ssr: false
    },
    {
      src: '~/plugins/filter',
      ssr: false
    },
    // {
    //   src: '~/plugins/country',
    //   ssr: false
    // },
    {
      src: '~/plugins/vuex-persist',
      // mode: 'client',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'vue-sweetalert2/nuxt'

  ],
  sweetalert: {
    confirmButtonColor: '#c71f40',
    cancelButtonColor: '#c71f40'
  },

    env: {
      // baseUrl: process.env.BASE_URL || 'http://police.test/api/',
      // ApiUrl: process.env.NODE_ENV == 'production' ? 'https://clientapi.afreal.one/api/' : 'http://afrealone.test/api/'
    },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV !== 'development' ? 'http://thibackend.test/api' : 'https://thi-ng.org/api'
    // baseURL: 'http://police.test/api/'
    // baseURL: "https://thi-ng.org/api"
  },
  proxy: {
    'prefix': 'baseURL'
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/profiling'
    },
    strategies: {
      local: {
        token: {
          property: 'data',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge:60*60*24
        },
        user: false,
        // user: {
        //   property: 'data',
        //   autoFetch: false
        // },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            // propertyName: 'data.data'
          },
          logout: {
            url: '/logout',
            method: 'get'
          },
          user: {
            url: '/profile',
            method: 'get',
            propertyName: 'data.data'
          },
          //  logout: { url: '/api/auth/logout', method: 'post' },
        // user: { url: '/api/auth/user', method: 'get' }

        }
      }

    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          // primary: '#0D4566',
          // secondary: '#006633',
          primary: '#c71f40',
          secondary: '#0a1c44',
          accent: '#c71f40',
          accent_text: '#c71f40',
          error: '#FF5252',
          info: '#0a1c44',
          success: '#0a1c44',
          warning: '#FFC107',
          link: '#FF5252'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          // info: colors.blue.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.blue.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
      // middleware: ['auth', 'is_loggedin', 'verify','review', 'app_guest'],
    linkExactActiveClass: 'active',
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'base',
    //     path: '/',
    //     component: resolve(__dirname, 'pages/login.vue')
    //   })
    // }
  }
}
