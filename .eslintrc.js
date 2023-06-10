// https://zh-hans.eslint.org/docs/latest
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
    // 'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'], // 要求箭头函数的参数使用圆括号
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号
    'comma-spacing': ['error', { before: false, after: true }], // 强制在逗号前后使用一致的空格
    curly: 'off', // 强制所有控制语句使用一致的括号风格
    'eol-last': 'off',
    indent: ['error', 2], // 强制使用一致的缩进
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'no-console': 'off', // 禁用 console
    'no-empty': 'off',
    'no-extra-semi': 'error', // 禁止不必要的分号
    'no-multi-spaces': 'error', // 禁止使用多个空格
    'no-undef': 'off', // 禁用未声明的变量
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-use-before-define': 'off',
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'object-curly-spacing': ['error', 'always'], // 强制在大括号中使用一致的空格
    quotes: ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
    semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }], // 强制在 function的左括号之前使用一致的空格
    'vue/html-indent': ['error', 2],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }]
  }
}