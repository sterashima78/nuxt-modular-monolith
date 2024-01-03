// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    "base",
    "domain1",
    "domain2",
    "domain3",
  ],
  typescript: {
    includeWorkspace: true
  }
})
