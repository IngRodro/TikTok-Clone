import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/public',
      '@atoms': '/src/components/atoms',
      '@molecules': '/src/components/molecules',
      '@organisms': '/src/components/organisms',
    }
  }
})
