import type { FunctionalComponent, SVGAttributes } from 'vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'
import { h } from 'vue'
import IconFaSolidAnglesLeft from '~icons/fa7-solid/angles-left'
import IconFaSolidAnglesRight from '~icons/fa7-solid/angles-right'
import IconFaSolidArrowDown from '~icons/fa7-solid/arrow-down'
import IconFaSolidArrowLeft from '~icons/fa7-solid/arrow-left'
import IconFaSolidArrowRight from '~icons/fa7-solid/arrow-right'
import IconFaSolidArrowUp from '~icons/fa7-solid/arrow-up'
import IconFaSolidBars from '~icons/fa7-solid/bars'
import IconFaSolidBell from '~icons/fa7-solid/bell'
import IconFaSolidBellRing from '~icons/fa7-solid/bell-concierge'
import IconFaSolidBolt from '~icons/fa7-solid/bolt'
import IconFaSolidCalendar from '~icons/fa7-solid/calendar'
import IconFaSolidChartColumn from '~icons/fa7-solid/chart-column'
import IconFaSolidChevronDown from '~icons/fa7-solid/chevron-down'
import IconFaSolidChevronLeft from '~icons/fa7-solid/chevron-left'
import IconFaSolidChevronRight from '~icons/fa7-solid/chevron-right'
import IconFaSolidChevronUp from '~icons/fa7-solid/chevron-up'
import IconFaSolidCircleCheck from '~icons/fa7-solid/circle-check'
import IconFaSolidRadio from '~icons/fa7-solid/circle-dot'
import IconFaSolidCircleExclamation from '~icons/fa7-solid/circle-exclamation'
import IconFaSolidCircleHalfStroke from '~icons/fa7-solid/circle-half-stroke'
import IconFaSolidCircleInfo from '~icons/fa7-solid/circle-info'
import IconFaSolidCircleQuestion from '~icons/fa7-solid/circle-question'
import IconFaSolidCircleXmark from '~icons/fa7-solid/circle-xmark'
import IconFaSolidDownload from '~icons/fa7-solid/download'
import IconFaSolidEllipsisVertical from '~icons/fa7-solid/ellipsis-vertical'
import IconFaSolidEyeDropper from '~icons/fa7-solid/eye-dropper'
import IconFaSolidFile from '~icons/fa7-solid/file'
import IconFaSolidFloppyDisk from '~icons/fa7-solid/floppy-disk'
import IconFaSolidGear from '~icons/fa7-solid/gear'
import IconFaSolidHome from '~icons/fa7-solid/home'
import IconFaSolidListAlt from '~icons/fa7-solid/list-alt'
import IconFaSolidMinus from '~icons/fa7-solid/minus'
import IconFaSolidPencil from '~icons/fa7-solid/pencil'
import IconFaSolidPlus from '~icons/fa7-solid/plus'
import IconFaSolidSearch from '~icons/fa7-solid/search'
import IconFaSolidSignOutAlt from '~icons/fa7-solid/sign-out-alt'
import IconFaSolidSort from '~icons/fa7-solid/sort'
import IconFaSolidSortDown from '~icons/fa7-solid/sort-down'
import IconFaSolidSortUp from '~icons/fa7-solid/sort-up'
import IconFaSolidSquare from '~icons/fa7-solid/square'
import IconFaSolidSquareCheck from '~icons/fa7-solid/square-check'
import IconFaSolidSquareMinus from '~icons/fa7-solid/square-minus'
import IconFaSolidStar from '~icons/fa7-solid/star'
import IconFaSolidTable from '~icons/fa7-solid/table'
import IconFaSolidTextHeight from '~icons/fa7-solid/text-height'
import IconFaSolidUpload from '~icons/fa7-solid/upload'
import IconFaSolidUser from '~icons/fa7-solid/user'
import IconFaSolidUserCircle from '~icons/fa7-solid/user-circle'
import IconMingcuteLoading2Fill from '~icons/mingcute/loading-2-fill'
import IconMingcuteMoonStarsFill from '~icons/mingcute/moon-stars-fill'
import IconMingcuteSunFill from '~icons/mingcute/sun-fill'

const aliases: IconAliases = {
  arrowup: 'arrow-up',
  arrowdown: 'arrow-down',
  arrowleft: 'arrow-left',
  arrowright: 'arrow-right',
  backspace: 'close',
  collapse: 'chevron-up',
  complete: 'circle-check',
  cancel: 'circle-xmark',
  close: 'close',
  delete: 'close',
  clear: 'close',
  success: 'circle-check',
  info: 'circle-info',
  warning: 'circle-exclamation',
  error: 'circle-xmark',
  prev: 'chevron-left',
  next: 'chevron-right',
  checkboxOn: 'square-check',
  checkboxOff: 'square',
  checkboxIndeterminate: 'square-minus',
  delimiter: 'circle-question',
  sortAsc: 'sort-up',
  sortDesc: 'sort-down',
  sort: 'sort',
  expand: 'chevron-down',
  menu: 'menu',
  subgroup: 'chevron-right',
  dropdown: 'chevron-down',
  radioOn: 'radio-on',
  radioOff: 'radio-off',
  edit: 'edit',
  ratingEmpty: 'star-empty',
  ratingFull: 'star-full',
  ratingHalf: 'star-half',
  loading: 'loading',
  first: 'angles-left',
  last: 'angles-right',
  unfold: 'sort',
  file: 'file',
  plus: 'plus',
  minus: 'minus',
  calendar: 'calendar',
  treeviewCollapse: 'chevron-down',
  treeviewExpand: 'chevron-right',
  upload: 'upload',
  download: 'download',
  eyeDropper: 'eye-dropper',
  color: 'palette',
  command: 'command',
  ctrl: 'ctrl',
  space: 'space',
  shift: 'shift',
  alt: 'alt',
  enter: 'enter',

  // App-specific aliases to keep page/layout files import-free.
  'theme-light': 'theme-light',
  'theme-dark': 'theme-dark',
  'theme-system': 'theme-system',
  'nav-home': 'nav-home',
  'nav-settings': 'nav-settings',
  'nav-forms': 'nav-forms',
  'nav-dashboard': 'nav-dashboard',
  'nav-loading': 'nav-loading',
  'nav-tables': 'nav-tables',
  'nav-realtime': 'nav-realtime',
  'open-external': 'open-external',
  notify: 'notify',
  'notify-active': 'notify-active',
  'user-circle': 'user-circle',
  'user-profile': 'user-profile',
  preferences: 'preferences',
  'sign-out': 'sign-out',
  search: 'search',
  docs: 'docs',
  features: 'features',
  components: 'components',
  community: 'community',
  translate: 'translate',
  'hero-rocket': 'hero-rocket',
}

type SvgIcon = FunctionalComponent<SVGAttributes>

const iconComponents: Record<string, SvgIcon> = {
  'arrow-up': IconFaSolidArrowUp,
  'arrow-down': IconFaSolidArrowDown,
  'arrow-left': IconFaSolidArrowLeft,
  'arrow-right': IconFaSolidArrowRight,
  close: IconFaSolidCircleXmark,
  'chevron-up': IconFaSolidChevronUp,
  'chevron-down': IconFaSolidChevronDown,
  'chevron-left': IconFaSolidChevronLeft,
  'chevron-right': IconFaSolidChevronRight,
  'circle-check': IconFaSolidCircleCheck,
  'circle-info': IconFaSolidCircleInfo,
  'circle-exclamation': IconFaSolidCircleExclamation,
  'circle-xmark': IconFaSolidCircleXmark,
  'square-check': IconFaSolidSquareCheck,
  square: IconFaSolidSquare,
  'square-minus': IconFaSolidSquareMinus,
  'radio-on': IconFaSolidRadio,
  'radio-off': IconFaSolidCircleQuestion,
  'star-empty': IconFaSolidStar,
  'star-full': IconFaSolidStar,
  'star-half': IconFaSolidStar,
  edit: IconFaSolidPencil,
  loading: IconMingcuteLoading2Fill,
  'angles-left': IconFaSolidAnglesLeft,
  'angles-right': IconFaSolidAnglesRight,
  file: IconFaSolidFile,
  plus: IconFaSolidPlus,
  minus: IconFaSolidMinus,
  calendar: IconFaSolidCalendar,
  upload: IconFaSolidUpload,
  download: IconFaSolidDownload,
  'eye-dropper': IconFaSolidEyeDropper,
  palette: IconFaSolidFloppyDisk,
  command: IconFaSolidBars,
  ctrl: IconFaSolidBars,
  space: IconFaSolidEllipsisVertical,
  shift: IconFaSolidSortUp,
  alt: IconFaSolidSortDown,
  enter: IconFaSolidArrowRight,
  sort: IconFaSolidSort,
  'sort-up': IconFaSolidSortUp,
  'sort-down': IconFaSolidSortDown,
  menu: IconFaSolidBars,

  'theme-light': IconMingcuteSunFill,
  'theme-dark': IconMingcuteMoonStarsFill,
  'theme-system': IconFaSolidCircleHalfStroke,
  'nav-home': IconFaSolidHome,
  'nav-settings': IconFaSolidGear,
  'nav-forms': IconFaSolidListAlt,
  'nav-dashboard': IconFaSolidChartColumn,
  'nav-loading': IconMingcuteLoading2Fill,
  'nav-tables': IconFaSolidTable,
  'nav-realtime': IconFaSolidBolt,
  'open-external': IconFaSolidArrowUp,
  notify: IconFaSolidBell,
  'notify-active': IconFaSolidBellRing,
  'user-circle': IconFaSolidUserCircle,
  'user-profile': IconFaSolidUser,
  preferences: IconFaSolidGear,
  'sign-out': IconFaSolidSignOutAlt,
  search: IconFaSolidSearch,
  docs: IconFaSolidTextHeight,
  features: IconFaSolidStar,
  components: IconFaSolidListAlt,
  community: IconFaSolidUser,
  translate: IconFaSolidArrowRight,
  'hero-rocket': IconFaSolidArrowUp,
}

function resolveIcon(icon: IconProps['icon']) {
  if (typeof icon !== 'string') return null

  const cleanName = icon.startsWith('$') ? icon.slice(1) : icon
  const aliasTarget = aliases[cleanName]
  const resolvedName = typeof aliasTarget === 'string' ? aliasTarget : cleanName

  return iconComponents[resolvedName] ?? iconComponents[cleanName] ?? null
}

const custom: IconSet = {
  component: (props: IconProps) => {
    const iconComponent = resolveIcon(props.icon)
    if (!iconComponent) return h('span')
    return h(iconComponent)
  },
}

export { aliases, custom }
