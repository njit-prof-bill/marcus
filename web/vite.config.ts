import dns from 'dns'
import path from 'path'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

dns.setDefaultResultOrder('verbatim')

console.log('Alias @ resolves to:', path.resolve(__dirname, './src'))

const viteConfig: UserConfig = {
  plugins: [redwood()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}

export default defineConfig(viteConfig)
