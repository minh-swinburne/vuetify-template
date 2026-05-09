import prettier from 'eslint-config-prettier'
import vuetify from 'eslint-config-vuetify'

export default vuetify({ ts: true }).then((c) => [...c, prettier])
