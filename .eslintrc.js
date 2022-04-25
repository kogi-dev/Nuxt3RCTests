module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  globals: {
    $nuxt: true,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  },
  plugins: ['nuxt', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'new-cap': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/component-name-in-template-casing': ['off', 'PascalCase'],
    'vue/attribute-hyphenation': ['warn'],
    'vue/no-unused-components': ['warn'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': ['off'],
    'no-unused-vars': ['warn'],
    eqeqeq: ['warn'],
    'no-lonely-if': ['warn'],
    'require-await': ['warn'],
    'handle-callback-err': ['warn'],
    curly: ['error', 'all'],
    'vue/multi-word-component-names': ['off']
  }
}
