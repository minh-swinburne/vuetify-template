import {
  mdiAlertOutline,
  mdiBellRingOutline,
  mdiCheckCircleOutline,
  mdiCloseOctagonOutline,
  mdiInformationSlabBoxOutline,
} from '@mdi/js'
// import { h } from 'vue'
import Vue3Toastify, {
  type IconProps,
  toast,
  type ToastContainerOptions,
} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

function svgIcon(path: string, color = 'primary') {
  return h(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      style: `fill: ${color}`,
    },
    h('path', { d: path }),
  )
}

const toastify = Vue3Toastify
const toastifyOptions = {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT,
  theme: 'auto',
  icon: (props: IconProps) => {
    switch (props.type) {
      case 'default': {
        return svgIcon(mdiBellRingOutline, 'var(--color-primary)')
      }
      case 'info': {
        return svgIcon(mdiInformationSlabBoxOutline, 'var(--color-info)')
      }
      case 'success': {
        return svgIcon(mdiCheckCircleOutline, 'var(--color-success)')
      }
      case 'error': {
        return svgIcon(mdiCloseOctagonOutline, 'var(--color-error)')
      }
      case 'warning': {
        return svgIcon(mdiAlertOutline, 'var(--color-warning)')
      }
      default: {
        return undefined
      }
    }
  },
} satisfies ToastContainerOptions

export default toastify
export { toastifyOptions }
