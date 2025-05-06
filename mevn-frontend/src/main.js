import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from './components/pages/ProjectList.vue';
import ProjectCreate from './components/pages/ProjectCreate.vue';
import ProjectEdit from './components/pages/ProjectEdit.vue';
import ProjectShow from './components/pages/ProjectShow.vue';
   
axios.defaults.baseURL = import.meta.env.VITE_API_URL
 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ProjectList },
    { path: '/create', component: ProjectCreate },
    { path: '/edit/:id', component: ProjectEdit },
    { path: '/show/:id', component: ProjectShow },
  ],
});
   
createApp(App).use(router).mount('#app');
