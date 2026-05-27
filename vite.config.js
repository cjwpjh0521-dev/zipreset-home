import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const ghostFilePlugin = {
  name: 'ignore-ghost-icon',
  configureServer(server) {
    server.watcher.on('error', (err) => {
      if (err && err.path && err.path.endsWith('icon.png')) return
      throw err
    })
  },
}

// .html 파일 요청은 실제 파일로 서빙 (index.html 제외)
const serveHtmlPlugin = {
  name: 'serve-standalone-html',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '').split('?')[0]
      if (url.endsWith('.html') && url !== '/index.html') {
        const filePath = path.join(process.cwd(), url)
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(fs.readFileSync(filePath))
          return
        }
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), ghostFilePlugin, serveHtmlPlugin],
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})