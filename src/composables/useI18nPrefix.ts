import { useI18n } from 'vue-i18n'

/**
 * Wraps `useI18n` to provide a `tp` helper that prepends a fixed key
 * prefix, and a `kp` helper that returns the full key path as a string (useful
 * for `<i18n-t :keypath>`). Also forwards `locale` for convenience. For other
 * `useI18n` properties, call `useI18n()` directly alongside this composable.
 *
 * @example
 * // pages/index.vue
 * const { tp, kp, locale } = useI18nPrefix('pages.index')
 * tp('heading.title')         // → t('pages.index.heading.title')
 * kp('card.hero.subtitle')         // → 'pages.index.card.hero.subtitle'
 *
 * // components/SomeCard.vue
 * const { tp } = useI18nPrefix('components.someCard')
 */
export function useI18nPrefix(prefix: string) {
  const { t, locale } = useI18n()

  /** Translate a key relative to this component's prefix. */
  const tp = (key: string, values?: Record<string, unknown>) =>
    values === undefined ? t(`${prefix}.${key}`) : t(`${prefix}.${key}`, values)

  /** Return the full i18n key path — for use with `<i18n-t :keypath>`. */
  const kp = (key: string) => `${prefix}.${key}`

  return { locale, tp, kp }
}
