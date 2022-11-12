// https://v3.nuxtjs.org/api/configuration/nuxt.config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  tailwindcss: {
    config: {
      content: ["content/**/**.md"],
      plugins: [tailwindTypography],
    },
  },
});
