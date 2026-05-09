import { describe, expect, it, vi } from 'vitest'
import * as vueI18n from 'vue-i18n'
import { useI18nPrefix } from '@/composables/useI18nPrefix'

vi.mock('vue-i18n', () => ({
  useI18n: vi.fn(),
}))

describe('useI18nPrefix', () => {
  it('provides prefixed translation functions', () => {
    const mockT = vi.fn().mockImplementation((key) => `translated: ${key}`)
    vi.spyOn(vueI18n, 'useI18n').mockReturnValue({
      t: mockT,
      locale: { value: 'en' },
    } as any)

    const { tp, kp, locale } = useI18nPrefix('test.prefix')

    expect(locale.value).toBe('en')

    expect(kp('key')).toBe('test.prefix.key')

    expect(tp('key')).toBe('translated: test.prefix.key')
    expect(mockT).toHaveBeenCalledWith('test.prefix.key')

    const values = { name: 'Vue' }
    tp('keyWithValues', values)
    expect(mockT).toHaveBeenCalledWith('test.prefix.keyWithValues', values)
  })
})
