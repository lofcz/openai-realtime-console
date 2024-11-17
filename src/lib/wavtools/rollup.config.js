import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: 'dist/audio-lib.min.js',
    format: 'umd',
    name: 'Wavtools',
    sourcemap: true
  },
  plugins: [
    resolve(),
    terser()
  ]
};
