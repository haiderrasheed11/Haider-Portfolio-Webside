const http = require('http');

const endpoints = [
  '/',
  '/index.html',
  '/about',
  '/about.html',
  '/projects',
  '/projects.html',
  '/project-detail.html?id=apex-ecommerce-hub',
  '/contact',
  '/contact.html',
  '/css/style.css',
  '/js/data.js',
  '/js/main.js',
  '/images/profile.jpg'
];

async function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${endpoint}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`✅ [${res.statusCode}] GET http://localhost:3000${endpoint} (${data.length} bytes)`);
        resolve(res.statusCode === 200);
      });
    }).on('error', (err) => {
      console.error(`❌ Error fetching ${endpoint}:`, err.message);
      resolve(false);
    });
  });
}

async function runTests() {
  console.log('Testing Portfolio Web Endpoints:');
  let passed = 0;
  for (const ep of endpoints) {
    const ok = await testEndpoint(ep);
    if (ok) passed++;
  }
  console.log(`\nTest Result: ${passed}/${endpoints.length} endpoints working properly!`);
}

runTests();
