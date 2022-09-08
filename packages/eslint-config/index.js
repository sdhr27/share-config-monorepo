/**
 * Shareable minimal ESLint config supporting both TypeScript (for source code,
 * tests, and scripts) and plain JavaScript (mostly for configuration files).
 */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:all',
        'airbnb',
        'plugin:prettier/recommended', // prettier配置
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        /* 原umi */
        strict: [0],
        'no-sequences': [0],
        'no-mixed-operators': [0],
        'react/react-in-jsx-scope': [0],
        'no-useless-escape': [0],
        /* */
        /* 22.02.18 更新后新增内容 */
        'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
        'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
        'react/function-component-definition': [
          2,
          { namedComponents: ['function-declaration', 'arrow-function'] },
        ],
        /* 更新后新增内容 */
        'react/jsx-props-no-spreading': 0, // 传入 props时 不可使用解构
        'react/state-in-constructor': 0,
        'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
        /* */
        'brace-style': [0],
        'no-console': [1],
        'guard-for-in': [0],
        'generator-star-spacing': [0],
        'consistent-return': [0],
        // issue https://github.com/facebook/react/issues/15204
        'react-hooks/exhaustive-deps': 'off', // 对依赖限制太死暂时不使用
        'react/forbid-prop-types': [0],
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.js', 'tsx', 'ts'] },
        ],
        'global-require': [1],
        'import/prefer-default-export': 'off',
        'import/no-default-export': [0, 'camel-case'],
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default-member': 0,
        'import/default': 0,
        'import/named': 0,
        'import/namespace': 0,
        'import/no-named-as-default': 1,
        'import/no-unresolved': 2,
        'import/no-cycle': 0,
        'import/extensions': 0,
        'react/jsx-no-bind': [0],
        'react/no-access-state-in-setstate': 1,
        'react/prop-types': [0],
        'react/sort-comp': 1,
        'react/prefer-stateless-function': [0],
        'react/jsx-wrap-multilines': [
          'error',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'ignore',
          },
        ],
        // 'react/destructuring-assignment': ['always', { ignoreClassFields: true }],
        'react/require-default-props': 'off',
        'react/destructuring-assignment': 'off', // 有时无法使用解构，且会主动改变逻辑解构
        'react/static-property-placement': 'off',
        'no-prototype-builtins': 'off',
        'no-else-return': [0],
        'no-restricted-syntax': [0],
        'no-underscore-dangle': [0],
        'prefer-destructuring': 1, // 有的时候你确实没法解构
        'jsx-a11y/no-static-element-interactions': [0],
        'jsx-a11y/no-noninteractive-element-interactions': [0],
        'jsx-a11y/click-events-have-key-events': [0],
        'jsx-a11y/anchor-is-valid': [0],
        'jsx-a11y/label-has-for': [
          2,
          {
            components: ['label'],
            required: {
              every: ['nesting', 'id'],
            },
            allowChildren: false,
          },
        ],
        'no-nested-ternary': [0],
        'arrow-body-style': [0],

        'no-bitwise': [0],
        'no-cond-assign': [0],
        'comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
          },
        ],
        'object-curly-newline': [0],
        'function-paren-newline': [0],
        'no-restricted-globals': [0],
        'require-yield': [1],
        // 'compat/compat': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-plusplus': [
          2,
          {
            allowForLoopAfterthoughts: true,
          },
        ],
        'no-param-reassign': [
          2,
          {
            props: false,
          },
        ],
        // 添加以下TS检查
        // 关闭部分可推导内容的强制书写
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          { allowTypedFunctionExpressions: true },
        ],
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true, typedefs: true },
        ],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'prettier/prettier': 0,
      },
    },
  ],
};
