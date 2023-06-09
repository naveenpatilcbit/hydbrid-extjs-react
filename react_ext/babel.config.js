module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "@babel/plugin-transform-modules-umd",
      {
        exactGlobals: true,
        globals: {
          index: "ReactLibrary",
        },
      },
    ],
  ],
};
