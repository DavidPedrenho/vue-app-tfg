<template>
  <div id="mi-componente">
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
  </div>
</template>

<script>


////CONEXION CON EL BACKEND
const url = 'http://localhost:4000/api/clientes';
 console.log(connectFunction());
async function connectFunction() {
    try {
        
        const response = await fetch(url);
        const data = await response.json();
        controlMyData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function controlMyData(data) {
    console.log(data);
    console.log(data.json); // Si quieres acceder al cuerpo JSON, debes llamar a `json()` sin paréntesis.
    return data.json;
}

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