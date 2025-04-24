import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'), 
        home: resolve(__dirname, 'home.html'), 
        settings: resolve(__dirname, 'settings.html'), 
      },
    },
  },
})


console.log('Resolved path to onboarding.html:', resolve(__dirname, 'onboarding.html'))
