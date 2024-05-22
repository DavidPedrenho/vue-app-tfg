<template>
  <div id="app">
  
    
    <h1><router-link to="/">Home</router-link></h1>
    
    <!-- <br />
    <router-link to="/hello-world">Hello word</router-link>
    <br />
    <router-link to="/mi-componente">mi componente</router-link>
    <br />
    <router-link to="/prueba-componente">Componente Prueba</router-link>
    <br />
    <router-link to="/jugador">Carta jugador</router-link>
    <br /> -->
    

    
    
     
    <router-view></router-view>
   
    
  </div>
</template>

<script >



export default {
  name: "App",
  components: {},
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
