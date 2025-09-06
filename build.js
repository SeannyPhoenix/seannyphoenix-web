const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  outfile: './public/build/bundle.js',
  platform: 'browser',
  target: 'esnext',
  sourcemap: true,
}).catch(() => process.exit(1));
