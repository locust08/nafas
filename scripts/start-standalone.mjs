import { spawn } from 'node:child_process';
import { cp, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const standaloneDir = resolve('.next/standalone');
const staticDir = resolve('.next/static');
const publicDir = resolve('public');
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

await mkdir(join(standaloneDir, '.next/static'), { recursive: true });
await cp(staticDir, join(standaloneDir, '.next/static'), { recursive: true, force: true });
await cp(publicDir, join(standaloneDir, 'public'), { recursive: true, force: true });

const server = spawn(process.execPath, [join(standaloneDir, 'server.js')], {
  stdio: 'inherit',
  env: {
    ...process.env,
    HOSTNAME: option('--hostname', '127.0.0.1'),
    PORT: option('--port', process.env.PORT || '3001'),
  },
});

server.on('exit', (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.kill(signal));
}
