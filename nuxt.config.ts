// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        'nuxt-swiper'
      ],
      swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
        modules: ['pagination', 'autoplay']
      }
})
