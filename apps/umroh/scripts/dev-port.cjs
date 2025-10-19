#!/usr/bin/env node
const { spawn } = require('child_process');
const net = require('net');
const path = require('path');

const BASE_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const MAX_TRIES = 100;

function isPortFreeIPv6(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', (err) => {
      if (err && err.code === 'EAFNOSUPPORT') {
        // IPv6 not supported, fallback will handle
        resolve('fallback');
      } else {
        resolve(false);
      }
    });
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, '::');
  });
}

function isPortFreeIPv4(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, '0.0.0.0');
  });
}

async function isPortFree(port) {
  const v6 = await isPortFreeIPv6(port);
  if (v6 === true) return true;
  if (v6 === 'fallback') {
    const v4 = await isPortFreeIPv4(port);
    return v4;
  }
  return false;
}

async function findAvailablePort(startPort) {
  for (let i = 0; i <= MAX_TRIES; i++) {
    const port = startPort + i;
    // eslint-disable-next-line no-await-in-loop
    const free = await isPortFree(port);
    if (free) return port;
  }
  throw new Error(`No free port found starting from ${startPort}`);
}

(async () => {
  try {
    const port = await findAvailablePort(BASE_PORT);
    console.log(`Dev server port selected: ${port}`);

    const nextBin = path.resolve(__dirname, '../node_modules/next/dist/bin/next');
    const args = ['dev', '--turbopack', '--port', String(port)];

    const proc = spawn(process.execPath, [nextBin, ...args], {
      stdio: 'inherit',
      env: { ...process.env, PORT: String(port) },
    });

    proc.on('exit', (code) => process.exit(code ?? 0));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();