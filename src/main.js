/* eslint-disable */

import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './assets/index.css';

 import Calendar from 'primevue/calendar';




///COMPONENTES

//Jugador
import PlayerComponent from './components/Player/Player-components.vue';
import DiagramaHexComponent from './components/Player/DiagramaHex-components.vue';
import SkillsComponent from './components/Player/skillsProfile-components.vue';

//Equipos
import CreateTeamsComponent from './components/Teams/CreateTeams-components.vue';

//Partidos
import MatchComponent from './components/Match/Match-components.vue';

//Admin
import FormPlayerComponent from './components/Admin/formNewPlayer-components.vue';
import FormNewMatchComponents from './components/Admin/formNewMatch-components.vue';



import MyConnectDb from './components/pruebas/ConnectDataBase.vue';
import MiComponente from './components/pruebas/MiComponente.vue';
import HelloWorld from './components/pruebas/HelloWorld.vue';
import PruebaComponent from './components/pruebas/PruebaComponent.vue'; 




//DEFINIR RUTAS
const routes = [

    { path: '/form-player', component: FormPlayerComponent },   //Formularios
    { path: '/form-match', component: FormNewMatchComponents},

    { path: '/player', component: PlayerComponent },          //Jugadores
    { path: '/hexagon', component: DiagramaHexComponent },
    { path: '/skills', component: SkillsComponent },

    { path: '/create-teams', component: CreateTeamsComponent },//Partidos
    { path: '/match', component: MatchComponent },


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



