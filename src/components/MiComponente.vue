<template>
  <div id="mi-componente">
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
  </div>
</template>

<script>

    export default{
        name: 'MiComponente', //Nombre de la etiqueta

        data() {
            return{
                subtitulo: 'Soy el subtitulo de mi componente'
            }
        },

    // mounted() {
    // fetch('http://localhost:4000/')
    // .then(data => {
    //     this.datos = data;
    //   })
        
    // }

  };

</script>