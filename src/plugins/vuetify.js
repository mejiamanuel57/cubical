import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#175b5b',
        secondary: '#15975a',
        accent: '#1d2923',
        error: '#b71c1c'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
