#!/usr/bin/env node

const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const nextBin = require.resolve('next/dist/bin/next');
const projectRoot = path.resolve(__dirname, '..');
const apiDir = path.join(projectRoot, 'app', 'api');
const tempApiDir = path.join(projectRoot, '.tmp-app-api');

let apiMoved = false;

const restoreApiDir = () => {
  if (apiMoved) {
    fs.rmSync(apiDir, { recursive: true, force: true });
    fs.mkdirSync(apiDir, { recursive: true });
    fs.cpSync(tempApiDir, apiDir, { recursive: true });
    fs.rmSync(tempApiDir, { recursive: true, force: true });
    apiMoved = false;
  }
};

try {
  if (fs.existsSync(apiDir)) {
    fs.rmSync(tempApiDir, { recursive: true, force: true });
    fs.mkdirSync(tempApiDir, { recursive: true });
    fs.cpSync(apiDir, tempApiDir, { recursive: true });
    fs.rmSync(apiDir, { recursive: true, force: true });
    apiMoved = true;
  }

  const child = spawn(process.execPath, [nextBin, 'build'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_STATIC_EXPORT: 'true',
    },
  });

  child.on('exit', (code, signal) => {
    restoreApiDir();
    if (signal) {
      process.kill(process.pid, signal);
    } else {
      process.exit(code ?? 0);
    }
  });

  process.on('SIGINT', () => {
    child.kill('SIGINT');
  });
  process.on('SIGTERM', () => {
    child.kill('SIGTERM');
  });
} catch (error) {
  restoreApiDir();
  throw error;
}
