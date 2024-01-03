// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    "base"
  ],
  vite: {
    define: {
      __NUXT_ASYNC_CONTEXT__: false
    }
  }
})
