import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Form,Input,Icon ,message } from 'ant-design-vue';
import './assets/css/style.css'
const app = createApp(App);
app.use(Input)
app.use(Icon)
app.use(router)
app.use(Form)
app.use(Button).mount('#app')
app.config.globalProperties.$message=message