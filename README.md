# Rick and Morty DEMO

## Features

- Vue 3.2
- Pinia store (fully typed Vuex store is available up to version 1.13)
- Routing using [vue-router 4](https://router.vuejs.org/)
- TypeScript 4.7
- Automatic package and component imports w/ [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- Tailwind CSS 3 w/ following plugins and configuration preinstalled:
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/line-clamp`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
  - `firefox`-variant
- PostCSS 8 w/ `postcss-nesting` plugin and `cssnano` for minimizing production CSS
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Using newest `script setup` syntax w/ Ref sugar (see the official [Script Setup documentation](https://vuejs.org/api/sfc-script-setup.html) and [Ref Sugar RFC](https://github.com/vuejs/rfcs/discussions/369) discussion)
- Vitest unit tests
- Playwright e2e + component tests
- GitHub workflows
  - Renovatebot for keeping up with dependencies
  - Automated unit tests
  - Automated component tests
  - Automated e2e tests
- GitLab CI config available up to versions 2.x

