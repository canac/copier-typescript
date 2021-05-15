'use strict';

/* eslint-disable import/no-extraneous-dependencies */
const { build, glob } = require('estrella');

build({
  // esbuild options
  entry: glob('src/**/*.ts'),
  outdir: 'dist',
  platform: 'node',
  target: 'node16',
  format: 'esm',
  minify: false,
  sourcemap: true,

  // estrella options
  tslint: true,
});
