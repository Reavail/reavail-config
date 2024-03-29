module.exports = ({
  plugins: [
    'autoprefixer',
    'postcss-custom-media',
    'postcss-nested',
    'postcss-flexbugs-fixes',
    'postcss-import',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    ...process.env.NODE_ENV === 'production' ? ['cssnano']: [],
  ],
})
