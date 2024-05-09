import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

//COMPONENTES
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import PruebaComponent from './components/PruebaComponent.vue'; 


//Definir rutas -- config
const routes = [
    { path: '/mi-componente', component: MiComponente },
    { path: '/hello-world', component: HelloWorld },
    { path: '/prueba-componente', component: PruebaComponent },
]


//Crear obj de rutas
const router = createRouter({
      history: createWebHistory(),
      routes
    });


//Instancia de Vue
const app = createApp(App);

app.use(router);

app.mount('#app');



