module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
  env: {
    production: {
      only: ['src'],
      plugins: ['@babel/plugin-transform-react-constant-elements'],
    },
  },
};
