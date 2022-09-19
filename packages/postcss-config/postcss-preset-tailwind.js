module.exports = {
  plugins: [
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
    'postcss-flexbugs-fixes',
    'postcss-import',
    ...process.env.NODE_ENV === 'production' ? ['cssnano'] : []
  ]
}
