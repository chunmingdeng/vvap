import { createApp } from 'vue'
import App from './App.vue'

import { axiosInstance, axiosInstanceNeedAuth} from '@/http'

const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$axiosAuth = axiosInstanceNeedAuth;
app.mount('#app');
