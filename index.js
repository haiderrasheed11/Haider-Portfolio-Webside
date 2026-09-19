const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function handleRequest(req, res) {
  try {
    const host = req.headers.host || 'localhost';
    const parsedUrl = new URL(req.url, `http://${host}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    const possibleBases = [
      process.cwd(),
      __dirname,
      path.join(__dirname, '..'),
      path.join(process.cwd(), 'public')
    ];

    let targetPath = null;

    for (const base of possibleBases) {
      const p = path.join(base, pathname);
      if (fs.existsSync(p)) {
        const stat = fs.statSync(p);
        if (stat.isFile()) {
          targetPath = p;
          break;
        } else if (stat.isDirectory() && fs.existsSync(path.join(p, 'index.html'))) {
          targetPath = path.join(p, 'index.html');
          break;
        }
      }
      // Check clean URL with .html
      const htmlPath = `${p}.html`;
      if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
        targetPath = htmlPath;
        break;
      }
    }

    if (!targetPath) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <div style="font-family: sans-serif; text-align: center; padding: 60px 20px; background: #070a13; color: #fff; min-height: 100vh;">
          <h1 style="color: #00f2fe; font-size: 2.5rem; margin-bottom: 10px;">404 - Page Not Found</h1>
          <p style="color: #94a3b8; font-size: 1.1rem; margin-bottom: 25px;">The requested file "${pathname}" does not exist.</p>
          <a href="/index.html" style="color: #00f2fe; text-decoration: none; border: 1px solid #00f2fe; padding: 10px 24px; border-radius: 30px; font-weight: 600;">← Back to Home</a>
        </div>
      `);
      return;
    }

    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(targetPath);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
    });
    res.end(content);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error: ' + err.message);
  }
}

if (require.main === module) {
  const server = http.createServer(handleRequest);
  server.listen(PORT, () => {
    console.log(`⚡ Portfolio Server running at http://localhost:${PORT}`);
  });
}

module.exports = handleRequest;
