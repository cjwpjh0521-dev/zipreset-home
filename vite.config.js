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

// 빌드 시 images/ 폴더를 dist/images/ 로 복사
const copyImagesPlugin = {
  name: 'copy-images',
  closeBundle() {
    const src = path.join(process.cwd(), 'images')
    const dest = path.join(process.cwd(), 'dist', 'images')
    const copyDir = (from, to) => {
      fs.mkdirSync(to, { recursive: true })
      for (const entry of fs.readdirSync(from)) {
        const srcPath = path.join(from, entry)
        const destPath = path.join(to, entry)
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath)
        } else {
          try { fs.copyFileSync(srcPath, destPath) } catch (_) {}
        }
      }
    }
    if (fs.existsSync(src)) copyDir(src, dest)
  },
}

export default defineConfig({
  plugins: [react(), ghostFilePlugin, serveHtmlPlugin, copyImagesPlugin],
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})