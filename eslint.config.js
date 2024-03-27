import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    'rules': {
      'arrow-parens': 'off', // 箭头函数参数需要括号
      'block-spacing': 'error', // 在打开块之后和关闭块之前禁止或强制块内的空格
      'comma-dangle': 'error', // 要求或不允许尾随逗号
      'comma-spacing': 'error', // 在逗号前后强制保持一致的间距
      'computed-property-spacing': 'error', // 在计算的属性括号内强制执行一致的间距
      'curly': 'off', // 对所有控制语句强制使用一致的大括号样式
      'eol-last': 'off', // 在文件末尾要求或禁止换行
      'func-call-spacing': 'error', // 要求或不允许函数标识符及其调用之间有间距
      'indent': ['error', 2], // 强制一致的缩进
      'key-spacing': 'error', // 在对象字面属性中强制键和值之间的间距一致
      'keyword-spacing': 'error',
      'no-console': 'off', // 禁止使用 console
      'no-constant-condition': 'off', // 禁止条件中的常量表达式
      'no-empty': 'off', // 禁止空块语句
      'no-empty-function': 'off', // 禁止空函数
      'no-extra-semi': 'error', // 禁止不必要的分号
      'no-inner-declarations': 'off', // 禁止嵌套块中的变量或 function 声明
      'no-multi-spaces': 'error', // 禁止多个空格
      'no-sequences': 'off', // 禁止逗号运算符
      'no-trailing-spaces': 'error', // 不允许在行尾出现尾随空格
      'no-undef': 'off', // 不允许使用未声明的变量
      'no-undef-init': 'off', // 不允许将变量初始化为 undefined
      'no-unused-vars': 'off', // 禁止未使用的变量
      'no-use-before-define': 'error', // 在定义之前禁止使用变量
      'no-var': 'error', // 需要 let 或 const 而不是 var
      'no-whitespace-before-property': 'error', // 禁止属性前有空格
      'object-curly-spacing': ['error', 'always'], // 在大括号内强制保持一致的间距
      'prefer-const': 'error', // 声明后从不重新分配的变量需要 const 声明
      'quote-props': 'off', // 需要在对象字面属性名称周围加上引号
      'quotes': ['error', 'single'], // 强制一致地使用反引号、双引号或单引号
      'semi': ['error', 'never'], // 要求或禁止使用分号而不是 ASI
      'semi-spacing': 'error', // 在分号前后强制保持一致的间距
      'space-before-blocks': 'error', // 在块之前强制保持一致的间距
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }], // 在 function 定义左括号之前强制保持一致的间距
      'space-in-parens': 'error', // 在括号内强制保持一致的间距
      'space-infix-ops': 'error', // 中缀运算符周围需要间距
      'space-unary-ops': 'error', // 在一元运算符之前或之后强制执行一致的间距
      'spaced-comment': ['error', 'always', {
        'line': {
          'markers': ['/'],
          'exceptions': ['-', '+']
        },
        'block': {
          'markers': ['!'],
          'exceptions': ['*'],
          'balanced': true
        }
      }], // 在注释中的 // 或 /* 之后强制保持一致的间距
      'switch-colon-spacing': 'error', // 在 switch 语句的冒号周围强制使用空格
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-spacing': 'error',
      'vue/html-self-closing': 'error',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'nuxt/prefer-import-meta': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
)