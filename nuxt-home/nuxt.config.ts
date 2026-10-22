  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: ['@nuxt/image', '@pinia/nuxt', 'vuetify-nuxt-module'],
    css: ['bootstrap/dist/css/bootstrap.min.css',
      '~/assets/scss/global.scss'
    ],
    app:{
          head: {
        title: 'заказы', 
        htmlAttrs: {
          lang: 'en',
        },
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
      },
    },
     build: {
    transpile: ['vuetify']
    },
    runtimeConfig: {
    yandexApiKey: process.env.YANDEX_GEOCODER_API_KEY,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }

  }
    // nitro: {
    //   routeRules: {
    //     '/about': { static: true },   // страница генерируется один раз
    //     '/blog/**': { swr: 60 }       // кеш на 60 секунд
    //   }
    // }
  });