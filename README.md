# Vuetify Vue 3 Template

A modern Vue 3 project template featuring Vuetify 4, Vite, TypeScript, Pinia, Vue Router, TailwindCSS, vue-i18n, and more.

## Tech Stack

- **[Vue 3](https://vuejs.org/)** – Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** – Lightning-fast build tool
- **[TypeScript](https://www.typescriptlang.org/)** – Typed JavaScript
- **[Vuetify 4](https://vuetifyjs.com/)** – Material Design UI component framework
- **[Pinia](https://pinia.vuejs.org/)** – State management
- **[Vue Router](https://router.vuejs.org/)** – Routing with file-based route generation via `unplugin-vue-router`
- **[vue-i18n](https://vue-i18n.intlify.dev/)** – Internationalization
- **[TailwindCSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Vitest](https://vitest.dev/)** – Unit testing
- **[vue3-toastify](https://vue3-toastify.js-bridge.com/)** – Toast notifications
- **[ESLint](https://eslint.org/)** – Linting
- **[Prettier](https://prettier.io/)** – Code formatting
- **[Unplugin](https://unplugin.unjs.io/)** – Unified plugin system, including:
  - **[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)** – Auto-imports for Vue, Router, Pinia APIs
  - **[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)** – Auto-import Vue components
  - **[unplugin-vue-router](https://github.com/posva/unplugin-vue-router)** – File-based routing (Merged into Vue Router 5+)
  - **[@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n)** – Locale message pre-compilation (AOT) plugin for vue-i18n
- **[vite-plugin-vue-layouts-next](https://github.com/loicduong/vite-plugin-vue-layouts-next)** – File-based layouts
- **[SASS/SCSS](https://sass-lang.com/)** – CSS preprocessor
- **[Fontsource/Roboto](https://fontsource.org/fonts/roboto)** – Self-hosted fonts

## Features

- Out-of-the-box Material Design UI with Vuetify 4
- Utility-first styling with TailwindCSS
- Type-safe development with TypeScript
- Auto-imports for Vue, Pinia, Router APIs and components
- File-based routing and layouts
- Internationalization with vue-i18n
- Toast notifications with vue3-toastify
- Unit testing with Vitest (put tests in `./tests`)
- Linting with ESLint
- Code formatting with Prettier
- Ready for rapid prototyping and scalable apps

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), [npm](https://www.npmjs.com/), or [bun](https://bun.sh/)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint      # Lint
npm run lint:fix  # Lint and auto-fix
```

### Format

```bash
npm run format        # Format code
npm run format:check  # Check code formatting
```

### CI

```bash
npm run ci  # Run format check, lint, tests, and build
```

### Type Check

```bash
npm run type-check
```

### Unit Testing (Vitest)

- Place your unit tests in the `./tests` directory.
- Functions to be tested should be in `./src/functions`.

```bash
npm run test:unit
```

## Project Structure

```text
<root>
├── public/                # Static assets (SVG logos, favicon)
├── src/
│   ├── assets/            # Static assets (images, etc.)
│   ├── components/        # Vue components (auto-imported)
│   ├── functions/         # Business logic/functions to be unit tested
│   ├── layouts/           # App layouts (auto-detected)
│   ├── pages/             # File-based routing (auto-detected)
│   ├── plugins/           # Global plugins (Vuetify, Pinia, Router, i18n, Toastify)
│   ├── router/            # Router config
│   ├── stores/            # Pinia stores
│   ├── styles/            # Tailwind, Vuetify, and custom styles
│   └── main.ts            # App entry point
├── tests/                 # Unit tests for src/functions
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.mts
├── vitest.config.ts
└── ...
```

## Customization

### Theming Vuetify

Edit `src/plugins/vuetify.ts` and `src/styles/settings.scss` to customize the default theme, colors, and SASS variables. See the [Vuetify Theming Guide](https://vuetifyjs.com/en/features/theme/).

### Using TailwindCSS

Use Tailwind utility classes in your templates. Tailwind is configured in `src/styles/tailwind.css`.

### Adding New Pages

Add `.vue` files to `src/pages/` to create new routes automatically.

### Adding New Layouts

Add `.vue` files to `src/layouts/` and use the `definePageMeta` block in your pages to specify layouts.

### State Management

Create new stores in `src/stores/` using Pinia. See the [Pinia Docs](https://pinia.vuejs.org/).

### Internationalization

Locale messages live in `src/locales/` as YAML files, mirroring the `src/components/` and `src/pages/` structure. Each folder corresponds to exactly one component or page, and contains one YAML file per language:

```text
src/locales/
├── components/         # Mirrors src/components/
│   └── MyComponent/
│       ├── en.yaml
│       └── vi.yaml
└── pages/              # Mirrors src/pages/
    └── index/          # Corresponds to src/pages/index.vue
        ├── en.yaml
        ├── ja.yaml
        └── vi.yaml
```

`@intlify/unplugin-vue-i18n` pre-compiles all YAML files at build time. Since files across all folders are merged into the same locale namespace per language, it is recommended to wrap keys in a top-level namespace to avoid collisions:

```yaml
# locales/components/MyComponent/en.yaml
components:
  myComponent:
    title: My Component
```

Then access it as `t('components.myComponent.title')` in the component. Add new locales by adding a new `<lang>.yaml` file in the relevant folder. See the [vue-i18n Docs](https://vue-i18n.intlify.dev/).

### Testing

Vitest is set up for unit testing. Place your tests in `tests/`. Functions to be tested should be in `src/functions/`.

## Useful Links

- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [vue-i18n Documentation](https://vue-i18n.intlify.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)

## Useful Utility Packages

Here are some recommended packages you may find helpful for extending this template:

- [VueUse](https://vueuse.org/) – Collection of essential Vue Composition Utilities
- [Playwright](https://playwright.dev/) – E2E testing
- [Husky](https://typicode.github.io/husky/) – Git hooks
- [vue3-marquee](https://github.com/megasanjay/vue3-marquee) – Marquee/scrolling text
- [vue3-carousel](https://ismail9k.github.io/vue3-carousel/) – Flexible, responsive carousel
- [vue3-lottie](https://github.com/chenxuan0000/vue3-lottie) – Lottie animations for Vue 3
- [vue-clipboard3](https://github.com/Inndy/vue-clipboard3) – Clipboard API for Vue 3
- [@vuepic/vue-datepicker](https://vuepic.github.io/vue-datepicker/) – Date picker for Vue 3
- [vue3-popper](https://github.com/valayuk/vue3-popper) – Popper.js tooltip/dropdown for Vue 3
- [vue3-icon](https://github.com/victorgarciaesgi/vue3-icon) – SVG icon component for Vue 3
- [vue3-colorpicker](https://github.com/caohenghu/vue3-colorpicker) – Color picker for Vue 3

Feel free to add more packages as your project grows!

## License

[MIT](LICENSE)

---

## Notes

- For pre-commit hooks, consider adding [Husky](https://typicode.github.io/husky/) with [lint-staged](https://github.com/okonet/lint-staged).
- For E2E testing, consider adding [Playwright](https://playwright.dev/).
- If you use GitHub, consider adding a CI workflow for linting, testing, and building.

---

Happy coding!
