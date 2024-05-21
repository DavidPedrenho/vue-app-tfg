import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './assets/index.css';





///COMPONENTES

import PlayerComponent from './components/Player/Player-components.vue';
import MyConnectDb from "./components/pruebas/ConnectDataBase.vue"
import MiComponente from './components/pruebas/MiComponente.vue';
import HelloWorld from './components/pruebas/HelloWorld.vue';
import PruebaComponent from './components/pruebas/PruebaComponent.vue'; 


//Definir rutas -- config
const routes = [

    { path: '/jugador', component: PlayerComponent },

    { path: '/mi-componente', component: MiComponente },
    { path: '/hello-world', component: HelloWorld },
    { path: '/prueba-componente', component: PruebaComponent },

    { path: '/connect-db', component: MyConnectDb },
]


//Crear obj de rutas
const router = createRouter({
      history: createWebHistory(),
      routes
    });


//Instancia de Vue

const app = createApp(App)
app.use(router);

app.mount('#app');



