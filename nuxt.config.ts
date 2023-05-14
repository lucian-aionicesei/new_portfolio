// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        'nuxt-swiper',
        'nuxt-vuefire'
      ],
      swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
        modules: ['pagination', 'autoplay']
      },
      vuefire: {
        config: {
          apiKey: "AIzaSyAxjD5KR5I7Of1PtbuoUuTUf81g-NpRrmA",
          authDomain: "porfolio-2023-637f0.firebaseapp.com",
          projectId: "porfolio-2023-637f0",
          storageBucket: "porfolio-2023-637f0.appspot.com",
          messagingSenderId: "215118836037",
          appId: "1:215118836037:web:c9c5688fb489530908ce2c",
          // storageBucket: "gs://porfolio-2023-637f0.appspot.com"
          // there could be other properties depending on the project
        },
      },
})
