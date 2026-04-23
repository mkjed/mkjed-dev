// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  app: {
    baseURL: '/mkjed-dev/',
    head: {
      title: "Michael Jedrzejczyk | Junior Frontend Developer",
      htmlAttrs: {
        lang: "de",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.ico" }],
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
