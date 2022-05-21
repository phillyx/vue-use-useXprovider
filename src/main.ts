import { createApp } from 'vue'
import App from './app.context'
import ElementPlus from 'element-plus'
import './theme/reset.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus, { size: 'small' })
app.mount('#app')
