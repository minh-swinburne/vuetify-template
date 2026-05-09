# Project Rules

## General

- Follow the existing code style and patterns.

## Writing Tests

- **Test Structure**: Mirror the `src/` directory structure within the `tests/` directory (e.g., `src/stores/app.ts` -> `tests/stores/app.test.ts`).
- **Dependencies**: Use `@vue/test-utils` for component mounting alongside `vitest` for the test runner.
- **Vuetify Mocking**: Vuetify must be attached globally via Vue Test Utils setup plugins. A global instance is already created in `tests/setup.ts`, which auto-registers all aliases to fix symbol warnings. Always ensure `VApp` or layout pieces use the necessary stubs to track deeply within routing or layout hierarchies without mounting sub-dependencies unnecessarily.
- **Alias Resolution**: For test imports, always use the `@/` Vite alias matching the `src` target rather than using backtracked relative paths (e.g., `import X from '@/components/X.vue'`).
- **Action Testing**: Ensure you test actual component DOM interactions using `@vue/test-utils` triggers (like `wrapper.find('button').trigger('click')`) rather than just relying on store tests to cover the component methods. Stubs and SPIs (`vi.spyOn()`) are preferred for verification.
- **Coverage Standard**: The team requires line coverage >90%. All features must be tested, and implicit coverage (where one test coincidentally runs another file's code) is insufficient; explicit testing routines must check module behaviors directly.
