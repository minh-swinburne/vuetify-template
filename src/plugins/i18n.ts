import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    title: {
      subtitle: 'Welcome to',
      heading: 'Vuetify 4',
    },
    message: {
      hello: 'Hello, World',
    },
    toast: {
      button: 'Toast!',
      select: {
        label: 'Toast Type',
        default: 'Default',
        loading: 'Loading',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        info: 'Info',
      },
    },
    card: {
      hero: {
        title: 'Getting Started',
        subtitle: 'Change this page by updating {file}.'
      },
      grid: {
        doc: {
          title: 'Documentation',
          subtitle: 'Learn about all things Vuetify in our documentation.',
        },
        feat: {
          title: 'Features',
          subtitle: 'Explore available framework Features.',
        },
        comp: {
          title: 'Components',
          subtitle: 'Discover components in the API Explorer.',
        },
        cmty: {
          title: 'Community',
          subtitle: 'Connect with Vuetify developers.',
        },
      },
    },
  },
  ja: {
    title: {
      subtitle: 'ようこそ',
      heading: 'Vuetify 4 へ',
    },
    message: {
      hello: 'こんにちは、世界',
    },
    toast: {
      button: 'トースト！',
      select: {
        label: 'トーストの種類',
        default: 'デフォルト',
        loading: '読み込み中',
        success: '成功',
        warning: '警告',
        error: 'エラー',
        info: '情報',
      },
    },
    card: {
      hero: {
        title: '始めよう',
        subtitle: 'このページは、{file} を更新して変更してください。'
      },
      grid: {
        doc: {
          title: 'ドキュメンテーション',
          subtitle: 'Vuetifyのドキュメントで詳細を学びましょう。',
        },
        feat: {
          title: '機能',
          subtitle: 'フレームワークの利用可能な機能を確認しましょう。',
        },
        comp: {
          title: 'コンポーネント',
          subtitle: 'APIエクスプローラーでコンポーネントを確認しましょう。',
        },
        cmty: {
          title: 'コミュニティ',
          subtitle: 'Vuetifyの開発者とつながりましょう。',
        },
      },
    },
  },

  vi: {
    title: {
      subtitle: 'Chào mừng đến với',
      heading: 'Vuetify 4',
    },
    message: {
      hello: 'Xin chào, Thế giới',
      toast: 'Thông báo!',
    },
    toast: {
      button: 'Thông báo!',
      select: {
        label: 'Loại thông báo',
        default: 'Mặc định',
        loading: 'Đang tải',
        success: 'Thành công',
        warning: 'Lưu ý',
        error: 'Lỗi',
        info: 'Thông tin',
      },
    },
    card: {
      hero: {
        title: 'Bắt đầu',
        subtitle: 'Thay đổi trang này bằng cách cập nhật {file}.'
      },
      grid: {
        doc: {
          title: 'Tài liệu',
          subtitle: 'Tìm hiểu mọi thứ về Vuetify trong tài liệu của chúng tôi.',
        },
        feat: {
          title: 'Tính năng',
          subtitle: 'Khám phá các tính năng của framework.',
        },
        comp: {
          title: 'Các thành phần',
          subtitle: 'Khám phá các thành phần trong API Explorer.',
        },
        cmty: {
          title: 'Cộng đồng',
          subtitle: 'Kết nối với các nhà phát triển Vuetify.',
        },
      },
    },
  },
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
