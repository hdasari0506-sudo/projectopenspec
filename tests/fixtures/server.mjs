import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const pagePath = fileURLToPath(new URL('../../site/index.html', import.meta.url));
const port = Number(process.env.PORT || 3000);

const server = createServer(async (request, response) => {
  if (request.url !== '/' && request.url !== '/index.html') {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  try {
    const page = await readFile(pagePath);
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    response.end(page);
  } catch (error) {
    console.error('Unable to serve the test page:', error);
    response.writeHead(500);
    response.end('Unable to serve the test page');
  }
});

server.listen(port, '127.0.0.1');
