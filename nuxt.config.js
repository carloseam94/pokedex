export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PokedexNav',
    titleTemplate: 'PokedexNav | %s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pokedex'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@carloseam94' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://pokedexnav.netlify.app/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'PokedexNav'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Pokedex'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://pokedexnav.netlify.app/app-icon.jpeg'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://pokedexnav.netlify.app/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'PokedexNav'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Pokedex'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://pokedexnav.netlify.app/app-icon.jpeg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://pokedexnav.netlify.app/app-icon.jpeg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'PokedexNav'
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://pokedexnav.netlify.app/`
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      }
    ]
  },

  loading: "~/components/Preloader.vue",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/main.css" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/assets/main.js", mode: "client" }, { src: "~/plugins/dropdown.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/color-mode", "@nuxtjs/google-fonts"],

  googleFonts: {
    download: true,
    base64: true,
    inject: true,
    overwriting: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: "PokedexNav",
      short_name: "PokedexNav",
      description: "Pokedex",
      theme_color: '#209CEE'
    },
    icon: {
      fileName: "app-icon.png"
    },
    workbox: {
      enabled: true
    }
  },

  generate: {
    fallback: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
