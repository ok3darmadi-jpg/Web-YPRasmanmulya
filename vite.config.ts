import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'cpanel-archive-serve',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url) {
              const urlClean = req.url.split('?')[0];
              if (urlClean.endsWith('/website_siap_upload_cpanel.tar.gz')) {
                const filePath = path.resolve(__dirname, 'public/website_siap_upload_cpanel.tar.gz');
                if (fs.existsSync(filePath)) {
                  const stat = fs.statSync(filePath);
                  res.writeHead(200, {
                    'Content-Type': 'application/x-gzip',
                    'Content-Length': stat.size,
                    'Content-Disposition': 'attachment; filename="website_siap_upload_cpanel.tar.gz"',
                    // Crucial: no Content-Encoding header so browser saves raw binary
                  });
                  fs.createReadStream(filePath).pipe(res);
                  return;
                }
              }
              if (urlClean.endsWith('/website_siap_upload_cpanel.zip')) {
                const filePath = path.resolve(__dirname, 'public/website_siap_upload_cpanel.zip');
                if (fs.existsSync(filePath)) {
                  const stat = fs.statSync(filePath);
                  res.writeHead(200, {
                    'Content-Type': 'application/zip',
                    'Content-Length': stat.size,
                    'Content-Disposition': 'attachment; filename="website_siap_upload_cpanel.zip"',
                  });
                  fs.createReadStream(filePath).pipe(res);
                  return;
                }
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
