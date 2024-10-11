/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  printWidth: 80,
  overrides: [
    {
      files: ['*.json'],
      options: {
        tabWidth: 2,
        useTabs: true,
      },
    },
  ],
}

module.exports = config
