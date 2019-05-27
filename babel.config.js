module.exports = (api) => {
  api.cache(true);
  // Presets
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ];
  // Plugins
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-destructuring',
  ];

  return {
    presets,
    plugins,
  };
};
