import { createApp } from 'vue'
import App from './App.vue'
import { installStore } from '@/stores'
import { installRouter } from '@/router'

const app = createApp(App)
installRouter(app)
installStore(app)
app.mount('#app')
