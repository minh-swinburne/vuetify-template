import Vue3Toastify, {
  type IconProps,
  toast,
  type ToastContainerOptions,
} from 'vue3-toastify'
import IconMdiAlertOutline from '~icons/mdi/alert-outline'
import IconMdiBellRingOutline from '~icons/mdi/bell-ring-outline'
import IconMdiCheckCircleOutline from '~icons/mdi/check-circle-outline'
import IconMdiCloseOctagonOutline from '~icons/mdi/close-octagon-outline'
import IconMdiInformationSlabBoxOutline from '~icons/mdi/information-slab-box-outline'
import 'vue3-toastify/dist/index.css'

function iconNode(icon: object, color: string) {
  return h(icon, {
    style: {
      color,
      width: '100%',
      height: '100%',
    },
  })
}

const toastify = Vue3Toastify
const toastifyOptions = {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT,
  theme: 'auto',
  icon: (props: IconProps) => {
    switch (props.type) {
      case 'default': {
        return iconNode(IconMdiBellRingOutline, 'var(--color-primary)')
      }
      case 'info': {
        return iconNode(IconMdiInformationSlabBoxOutline, 'var(--color-info)')
      }
      case 'success': {
        return iconNode(IconMdiCheckCircleOutline, 'var(--color-success)')
      }
      case 'error': {
        return iconNode(IconMdiCloseOctagonOutline, 'var(--color-error)')
      }
      case 'warning': {
        return iconNode(IconMdiAlertOutline, 'var(--color-warning)')
      }
      default: {
        return undefined
      }
    }
  },
} satisfies ToastContainerOptions

export default toastify
export { toastifyOptions }
