# Vuetify Vue 3 Template

A modern Vue 3 project template featuring Vuetify, Vite, TypeScript, Pinia, Vue Router, TailwindCSS, Vitest, Playwright, ESLint, Prettier, Husky, and more.

## Tech Stack

- **[Vue 3](https://vuejs.org/)** – Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** – Lightning-fast build tool
- **[TypeScript](https://www.typescriptlang.org/)** – Typed JavaScript
- **[Vuetify](https://vuetifyjs.com/)** – Material Design UI component framework
- **[Pinia](https://pinia.vuejs.org/)** – State management
- **[Vue Router](https://router.vuejs.org/)** – Routing & File-based routing with unplugin-vue-router merged (vue-router 5+)
- **[VueUse](https://vueuse.org/)** – Collection of essential Vue Composition Utilities (included)
- **[TailwindCSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Vitest](https://vitest.dev/)** – Unit testing
- **[Playwright](https://playwright.dev/)** – E2E testing
- **[ESLint](https://eslint.org/)** – Linting
- **[Prettier](https://prettier.io/)** – Code formatting
- **[Husky](https://typicode.github.io/husky/)** – Git hooks
- **[Unplugin](https://unplugin.unjs.io/)** - Unified plugin system, including:
  - **[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)** – Auto-imports for APIs
  - **[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)** – Auto-import Vue components
  <!-- - **[unplugin-vue-router](https://github.com/posva/unplugin-vue-router)** – File-based routing -->
- **[vite-plugin-vue-layouts-next](https://github.com/loicduong/vite-plugin-vue-layouts-next)** – File-based layouts
- **[SASS/SCSS](https://sass-lang.com/)** – CSS preprocessor
- **[Fontsource/Roboto](https://fontsource.org/fonts/roboto)** – Self-hosted fonts

## Features

- Out-of-the-box Material Design UI with Vuetify
- Utility-first styling with TailwindCSS
- Type-safe development with TypeScript
- Auto-imports for Vue, Pinia, Router, and components
- File-based routing and layouts
- VueUse utilities available out of the box
- Unit testing with Vitest (put tests in `./tests`)
- E2E testing with Playwright (put tests in `./e2e`)
- Linting and formatting with ESLint and Prettier
- Git hooks with Husky
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

### Lint & Format

```bash
npm run lint      # Lint and auto-fix
npm run format    # Format code with Prettier
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

### E2E Testing (Playwright)

- Place your E2E tests in the `./e2e` directory.

```bash
npm run test:e2e
```

### Git Hooks (Husky)

- Husky is set up to manage Git hooks. Customize hooks in the `.husky/` directory.

## Project Structure

```text
<root>
├── .husky/                # Husky git hooks (pre-commit, etc.)
├── e2e/                   # Playwright E2E tests (create if missing)
├── node_modules/
├── public/
├── src/
│   ├── assets/            # Static assets
│   ├── components/        # Vue components (auto-imported)
│   ├── functions/         # Business logic/functions to be unit tested
│   ├── layouts/           # App layouts (auto-detected)
│   ├── pages/             # File-based routing (auto-detected)
│   ├── plugins/           # Global plugins (Vuetify, Pinia, Router)
│   ├── router/            # Router config (auto-generated)
│   ├── stores/            # Pinia stores
│   ├── styles/            # Tailwind, Vuetify, and custom styles
│   └── main.ts            # App entry point
├── tests/                 # Unit tests for src/functions (create if missing)
├── .editorconfig
├── .eslintrc-auto-import.json
├── .gitignore
├── .prettierrc.json
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tailwind.config.js     # (create if customizing Tailwind)
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── ...
```

## Customization

### Theming Vuetify

Edit `src/plugins/vuetify.ts` and `src/styles/settings.scss` to customize the default theme, colors, and SASS variables. See the [Vuetify Theming Guide](https://vuetifyjs.com/en/features/theme/).

### Using TailwindCSS

Use Tailwind utility classes in your templates. Tailwind is configured in `src/styles/main.css` and can be customized via `tailwind.config.js` (add this file if you need custom config).

### Adding New Pages

Add `.vue` files to `src/pages/` to create new routes automatically.

### Adding New Layouts

Add `.vue` files to `src/layouts/` and use the `definePageMeta` block in your pages to specify layouts.

### State Management

Create new stores in `src/stores/` using Pinia. See the [Pinia Docs](https://pinia.vuejs.org/).

### Testing

Vitest is set up for unit testing. Place your tests in `tests/`. Functions to be tested should be in `src/functions/`.

Playwright is set up for E2E testing. Place your tests in `e2e/`.

## Useful Links

- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Husky Documentation](https://typicode.github.io/husky/)

## Useful Utility Packages

Here are some recommended Vue 3 utility packages you may find helpful:

- [vue3-toastify](https://vue3-toastify.js.org/) – Toast notifications
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

- For pre-commit hooks, Husky is set up. For staged linting/formatting, consider [lint-staged](https://github.com/okonet/lint-staged).
- If you use GitHub, consider adding a CI workflow for linting, testing, and building.

---

Happy coding!
