import { createApp } from 'vue'
import App from './App.vue'
import { installStore } from '@/stores'
import { installRouter } from '@/router'
import { installAssets } from '@/plugins/assets.ts'

const app = createApp(App)
installRouter(app)
installStore(app)
installAssets()
app.mount('#app')
