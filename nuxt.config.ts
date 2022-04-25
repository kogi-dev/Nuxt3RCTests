import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/styles/main.css'],
    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        }
    },
    vue: {
        config: {
          productionTip: true,
          devtools: true
        }
      }
})
