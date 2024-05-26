/* eslint-disable */

import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './assets/index.css';





///COMPONENTES

import PlayerComponent from './components/Player/Player-components.vue';
import DiagramaHexComponent from './components/Player/DiagramaHex-components.vue';
import SkillsComponent from './components/Player/skillsProfile-components.vue';

import CreateTeamsComponent from './components/Teams/CreateTeams-components.vue';

import MatchComponent from './components/Match/Match-components.vue';



import MyConnectDb from './components/pruebas/ConnectDataBase.vue';
import MiComponente from './components/pruebas/MiComponente.vue';
import HelloWorld from './components/pruebas/HelloWorld.vue';
import PruebaComponent from './components/pruebas/PruebaComponent.vue'; 



//Definir rutas -- config
const routes = [

    { path: '/jugador', component: PlayerComponent },
    { path: '/hexagono', component: DiagramaHexComponent },
    { path: '/skills', component: SkillsComponent },

    { path: '/crear-equipos', component: CreateTeamsComponent },
    { path: '/partido', component: MatchComponent },


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



