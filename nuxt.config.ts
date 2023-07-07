// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],

  googleFonts: {
    families: {
      Lobster: [400],
    },
    display: "swap",
  },

  colorMode: { classSuffix: "" },
});
