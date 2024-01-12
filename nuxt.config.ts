// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Break coding",
      meta: [
        {
          charset: "utf-8",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "~/../public/dog.ico" },
      ],
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Inter: "200..700",
      "Crimson Pro": {
        wght: "200..900",
        ital: "200..700",
      },
    },
  },
  devtools: { enabled: true },
  srcDir: "src",
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  css: ["../assets/css/main.css"],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./src/stores/**"],
  },
});
