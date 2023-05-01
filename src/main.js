import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

createApp(App).use(router,bootstrap).mount('#app')
