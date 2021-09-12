import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Form,Input,Icon ,Menu,Layout,message } from 'ant-design-vue';
import './assets/css/style.css'
const app = createApp(App);
app.use(Input)
app.use(Icon)
app.use(Layout)
app.use(Menu)
app.use(router)
app.use(Form)
app.use(Button).mount('#app')
message.config({
    top: `100px`,
    duration: 2,
    maxCount: 3,
  });
app.config.globalProperties.$message=message