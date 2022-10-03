function path(p) {
  return [p, p.replace(/\//g, '\\')];
}

module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['strict-dependencies'],
  rules: {
    'strict-dependencies/strict-dependencies': [
      'error',
      [
        {
          module: 'framework/server',
          allowReferenceFrom: [...path('src/pages/api')],
        },
        {
          module: 'framework/client',
          allowReferenceFrom: [...path('!(src/framework/server/**|src/framework/common/**|src/pages/api/**)')],
        },
      ],
    ],
  },
};
