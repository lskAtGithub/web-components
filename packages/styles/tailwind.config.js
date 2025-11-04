module.exports = {
  content: ['../components/src/**/*.{ts,js}'],
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: false // ❗️ 不重置 shadow dom
  }
};
