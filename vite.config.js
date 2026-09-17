import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const pages = [
  'index', 'screenPrinted', 'digital', 'polyCard', 'mcycle',
  'rlFrames', 'cfFrames', 'art', 'templates', 'privacyPolicy',
]

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: Object.fromEntries(pages.map((page) => [page, resolve(__dirname, `${page}.html`)])),
    },
  },
})
