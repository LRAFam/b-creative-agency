import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['@vueuse/nuxt'],
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  vite: {
    optimizeDeps: {
      include: ['@heroicons/vue/24/outline', '@heroicons/vue/24/solid'],
    },
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    resendApiKey: '',
    contactEmail: 'bethany@bcreativeagency.co.uk',
    public: {},
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'B Creative Agency — Social Media Management',
      meta: [
        {
          name: 'description',
          content:
            'Strategic social media management that builds brands, drives engagement and generates real enquiries. By Bethany Coston.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap',
        },
      ],
    },
  },
})
