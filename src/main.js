/* eslint-disable */

import Vue from 'vue';
import App from './App.vue'
import './assets/index.css';
import VueRouter from 'vue-router';


///COMPONENTES

import MenuComponent from './components/menu-components.vue';

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


//Páginas de Menú
import MatchMenu from './Menu-components/MatchMenu.vue';
import CreateTeamsMenu from './Menu-components/CreateTeamsMenu.vue';
import CreatePlayerMenu from './Menu-components/CreatePlayerMenu.vue';
import PlayersMenu from './Menu-components/PlayersMenu.vue';
import SettingMenu from './Menu-components/SettingMenu.vue';


Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'partidos',
    component: MatchMenu
  },
  {
    path: '/crear-equipos',
    name: 'crear equipos',
    component: CreateTeamsMenu
  },
  {
    path: '/añadir-jugador',
    name: 'añadir jugador',
    component: CreatePlayerMenu
  },
  {
      path: '/jugadores',
      name: 'jugadores',
      component: PlayersMenu
    },
    {
      path: '/ajustes',
      name: 'ajustes',
      component: SettingMenu
    },



]

// base: process.env.BASE_URL,

const router = new VueRouter({
routes,
mode: 'history'

});


new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app');



// Función para poner la posición de la pag al incio

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); 
  next(); 
});

export default router;


// import MyConnectDb from './components/pruebas/ConnectDataBase.vue';
// import MiComponente from './components/pruebas/MiComponente.vue';
// import HelloWorld from './components/pruebas/HelloWorld.vue';
// import PruebaComponent from './components/pruebas/PruebaComponent.vue'; 




//DEFINIR RUTAS
// const routes = [





//     { path: '/menu', component: MenuComponent },

//     { path: '/form-player', component: FormPlayerComponent },   //Formularios
//     { path: '/form-match', component: FormNewMatchComponents},

//     { path: '/player', component: PlayerComponent },          //Jugadores
//     { path: '/hexagon', component: DiagramaHexComponent },
//     { path: '/skills', component: SkillsComponent },

//     { path: '/create-teams', component: CreateTeamsComponent },//Partidos
//     { path: '/match', component: MatchComponent },


//     // { path: '/mi-componente', component: MiComponente },
//     // { path: '/hello-world', component: HelloWorld },
//     // { path: '/prueba-componente', component: PruebaComponent },

//     // { path: '/connect-db', component: MyConnectDb },
// ]


// //Crear obj de rutas
// const router = createRouter({
//       history: createWebHistory(),
//       routes
//     });


// //Instancia de Vue

// const app = createApp(App)
// app.use(router);

// app.mount('#app');



