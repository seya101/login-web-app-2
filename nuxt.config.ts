// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Login Creative UI',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    runtimeConfig: {
      // Private config that is only available on the server
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      // Config within public will be also exposed to the client
      public: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      }
    },
  })
