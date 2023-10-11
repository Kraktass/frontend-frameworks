import { createApp } from 'vue';
import App from './App.vue';
import { frameworksData } from './frameworksData.js';

const app = createApp(App);

app.mount('#app', {
  frameworksData, 
});