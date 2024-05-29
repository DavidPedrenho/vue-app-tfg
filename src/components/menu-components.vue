



<template>

  
  <div class="max-w-screen-md mx-auto fixed inset-x-0 bottom-0 lg:top-0 z-50">
    <ul class="menu bg-base-200 menu-horizontal sm:gap-x-10 rounded-box flex justify-center">
      <li>
        <a>
          <img v-if="isLargeScreen" :src="partidos" alt="Partidos" class="w-15 h-15 rounded-2xl"/>
          <img v-else :src="partidos" alt="Partidos" class="w-9 h-9 rounded-2xl"/>
        </a>
      </li>
      <li>
        <a>
          <img v-if="isLargeScreen" :src="createTeams" alt="Crear Equipos" class="w-15 h-15"/>
          <img v-else :src="createTeams" alt="Crear Equipos" class="w-9 h-9"/>
        </a>
      </li>
      <li>
        <a>
          <img v-if="isLargeScreen" :src="añadirJugador" alt="Añadir Jugador" class="w-15 h-15"/>
          <img v-else :src="añadirJugador" alt="Añadir Jugador" class="w-9 h-9"/>
        </a>
      </li>
      <li>
        <a>
          <img v-if="isLargeScreen" :src="jugadores" alt="Jugadores" class="w-15 h-15"/>
          <img v-else :src="jugadores" alt="Jugadores" class="w-9 h-9"/>
        </a>
      </li>
      <li>
        <a>
          <img v-if="isLargeScreen" :src="ajustes" alt="Ajustes" class="w-15 h-15"/>
          <img v-else :src="ajustes" alt="Ajustes" class="w-9 h-9"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

/* eslint-disable */
export default {
  data() {
    return {
      partidos: require('../assets/icons/partidos.png'),
      jugador: require('../assets/icons/jugador.png'),
      añadirJugador: require('../assets/icons/añadir-jugador.png'),
      jugadores: require('../assets/icons/jugadores-lista.png'),
      ajustes: require('../assets/icons/ajustes.png'),
      createTeams: require('../assets/icons/create-tems-fem.png'),

      isLargeScreen: window.innerWidth >= 1024
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isLargeScreen = window.innerWidth >= 1024;
    }
  }
};
</script>

<style>
/* Puedes añadir estilos adicionales aquí si es necesario */
</style>





#EBEBEB
#0d162c
#1C82AD
#03C988