import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

import MiComponente from './components/MiComponente';


//Definir rutas -- config
const routes = [
    { path: '/', component: MiComponente }
]


//Crear obj de rutas
const router = createRouter({
      history: createWebHashHistory(),
      routes
    });


//Instancia de Vue
const app = createApp(App);

app.use(router);

app.mount('#app');















// import MiComponente from './components/MiComponente'; // Importa los componentes que usarás en las rutas

// createApp(App).mount('#app')
// Vue.config.productionTip = false; // muestra advertencias 

// Vue.use(VueRouter);


// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', component: MiComponente },
    
//   ]
// });

// export default router;


// const routes = [
//     {path:'/mi-componente', component: MiComponente}
// ];


// const router = new VueRouter({   //Damos de alta las rutas
//     routes,
//     mode: 'history'
// })

// new Vue({
//     router,                   //Damos de alta el router dentro de la instacia de Vue para el funcionamiento de manera global
//     render: h => h(App),
//   }).$mount('#app');
