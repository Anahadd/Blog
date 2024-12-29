import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      'styled-components': 'styled-components',
    },
  },
  optimizeDeps: {
    include: ['styled-components'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})

