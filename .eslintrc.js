process.chdir(__dirname); // needed to fix IDEA wrongly resolving 'import/no-unresolved' rule

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  'ignorePatterns': [
    '*.js',
  ],
  'overrides': [
    {
      'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      'files': [
        '*.ts',
      ],
      'parserOptions': {
        'sourceType': 'module',
        'tsconfigRootDir': __dirname,
        'project': 'tsconfig.eslint.json',
      },
      'plugins': [
        '@typescript-eslint',
        'import',
        'unused-imports',
      ],
      'settings': {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          'typescript': {
            'alwaysTryTypes': true,
            'project': [
              './tsconfig.eslint.json',
            ],
          },
        },
      },
      'rules': {
        // ES LINT
        'no-irregular-whitespace': 'off',
        'no-empty-function': 'off',
        'no-unused-vars': 'off',
        'no-underscore-dangle': 'off',
        'no-inner-declarations': 'error',
        'max-lines': [
          'warn',
          500,
        ],
        'brace-style': [
          'error',
          '1tbs',
        ],
        'curly': [
          'error',
          'all',
        ],
        'no-useless-escape': 'error',
        'semi': 'off',
        'indent': [
          'error',
          2,
          {
            'SwitchCase': 1,
            'FunctionDeclaration': {
              'parameters': 'first',
            },
          },
        ],
        'arrow-parens': 'off',
        'no-restricted-imports': 'off',
        'max-classes-per-file': ['error', 1],
        'max-len': [
          'error',
          {
            'code': 140,
            ignorePattern: '^import .*',
          },
        ],
        'no-console': 'off',
        'no-multiple-empty-lines': ['error', {'max': 1}],
        'no-empty': [
          'error',
          {
            allowEmptyCatch: true,
          },
        ],
        'no-fallthrough': 'error',
        'quote-props': [
          'error',
          'as-needed',
        ],
        'id-blacklist': 'off',
        'sort-keys': 'off',
        'comma-dangle': 'off',
        'arrow-body-style': [
          'error',
          'as-needed',
        ],
        'object-shorthand': [
          'error',
          'always',
        ],
        'space-before-function-paren': [
          'error',
          'never',
        ],
        'padded-blocks': [
          'error',
          {
            'classes': 'always',
          },
        ],
        'object-curly-spacing': [
          'error',
          'always',
        ],
        // ./ES LINT

        // TYPESCRIPT
        '@typescript-eslint/no-duplicate-imports': [
          'error',
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            'functions': false,
          },
        ],
        '@typescript-eslint/restrict-template-expressions': 'off',
        // TODO: PDEV-11955
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 1,
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            'paths': [
              {
                'name': 'lodash-es',
                'message': 'Please use default import (import isNil from \'lodash-es/isNil\'; ...)',
              },
              {
                'name': 'lodash',
                'message': 'Please use default import from lodash-es (import isNil from \'lodash-es/isNil\'; ...)',
              },
              {
                'name': 'rxjs/Rx',
                'message': 'Please import directly from \'rxjs\' instead',
              },
            ],
          },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/unbound-method': [
          'warn',
          {
            'ignoreStatic': true,
          },
        ],
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            'avoidEscape': true,
            'allowTemplateLiterals': true,
          },
        ],
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/semi': [
          'error',
          'always',
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            'default': 'array',
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            'multiline': {
              'delimiter': 'semi',
              'requireLast': true,
            },
            'singleline': {
              'delimiter': 'semi',
              'requireLast': false,
            },
            'multilineDetection': 'brackets',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'warn',
          'interface',
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            'accessibility': 'explicit',
            'overrides': {
              'constructors': 'off',
            },
          },
        ],
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            'default': [
              // Index signature
              'signature',

              // Fields
              'static-field',

              'decorated-field',

              'instance-field',

              'abstract-field',

              'field',

              // Constructors
              'constructor',

              // Getters & setters
              [
                'get',
                'set',
              ],

              // Methods
              'static-method',

              'decorated-method',

              'instance-method',

              'abstract-method',

              'method',
            ],
          },
        ],
        '@typescript-eslint/comma-dangle': [
          'error',
          'always-multiline',
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            'vars': 'all',
            'varsIgnorePattern': '^_',
            'args': 'none',
          },
        ],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            'types': {
              'Object': {
                'message': 'Avoid using the `Object` type. Did you mean `Record<string, unknown>`?',
              },
              'Function': {
                'message': 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
              },
              'Boolean': {
                'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?',
              },
              'Number': {
                'message': 'Avoid using the `Number` type. Did you mean `number`?',
              },
              'String': {
                'message': 'Avoid using the `String` type. Did you mean `string`?',
              },
              'Symbol': {
                'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?',
              },
            },
          },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            'hoist': 'all',
          },
        ],
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        // ./TYPESCRIPT

        // IMPORT
        'import/newline-after-import': [
          'error',
          {
            'count': 1,
          },
        ],
        'import/no-deprecated': 'off',
        'import/no-unresolved': [
          'error',
          {
            ignore: ['script-loader!blueimp-md5/js/md5'],
          },
        ],
        'import/no-restricted-paths': [
          'error',
          {
            zones: [
              // COMMON FOLDER
              {
                target: './src/app/common',
                from: './src/app/{shared,api,section}/**/*',
                message: 'You can\'t import files from this folder, you will need first to move that files into \'common\' folder, ' +
                 'because inside \'common\' folder you can only import files from \'util\', \'common\' folder',
              },
              // ./COMMON FOLDER

              // API FOLDER
              {
                target: './src/app/api',
                from: './src/app/{shared,common,section}/**/*',
                message: 'You can\'t import files from this folder, you will need first to move that files into \'api\' folder, ' +
                  'because inside \'api\' folder you can only import files from \'util\', \'api\' folders',
              },
              // ./API FOLDER

              // SHARED FOLDER
              {
                target: './src/app/shared',
                from: './src/app/section/**/*',
                message: 'You can\'t import files from this folder, you will need first to move that files into \'shared\' folder, ' +
                  'because inside \'shared\' folder you can only import files from \'util\', \'api\', \'shared\', \'common\' folders',
              },
              // ./SHARED FOLDER

              // UTIL FOLDER
              {
                target: './src/app/util',
                from: './src/app/{shared,common,section,api}/**/*',
                message: 'You can\'t import files from this folder, you will need first to move that files into \'util\' folder, ' +
                  'because inside \'util\' folder you can only import files from \'util\', folder',
              },
              // ./UTIL FOLDER

            ],
          },
        ],
        // ./IMPORT

        // UNUSED IMPORTS
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 'off',
        // ./UNUSED IMPORTS

        // PREFER ARROW
        'prefer-arrow/prefer-arrow-functions': 'off',
        // ./PREFER ARROW
      },
    },
  ],
}
