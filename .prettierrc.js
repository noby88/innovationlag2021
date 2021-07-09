module.exports = {
  printWidth: 160,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  useTabs: false,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  endOfLine: "auto",
  overrides: [
    {
      files: "*.{js,jsx,tsx,ts,scss,json,html}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
