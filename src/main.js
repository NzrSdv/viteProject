import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/business/router.js';
import store from './components/store';

createApp(App).use(store).use(router).mount('#app')
