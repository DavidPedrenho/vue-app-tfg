<template>
    <div id="mi-componente" data-theme="dim">
        
        <form @submit.prevent="miFormulario">
            <label>ID</label>
            <input v-model="id" type="number" placeholder="id"
                class="input input-bordered input-primary w-full max-w-xs" />
            <br>
            <label>Nombre</label>
            <input v-model="nombre" type="text" placeholder="Nombre"
                class="input input-bordered input-primary w-full max-w-xs" />
            <br>
            <label>Edad</label>
            <input v-model="edad" type="number" placeholder="Edad"
                class="input input-bordered input-primary w-full max-w-xs" />
            <br>
            <label>Profesión</label>
            <input v-model="profesion" type="text" placeholder="Profesión"
                class="input input-bordered input-primary w-full max-w-xs" />
            <br>
            <input type="submit" value="Enviar al Back">
            <button class="btn btn-outline btn-success">Success</button>
            
        </form>

        <h1>Este es mi componente</h1>
        <h2>{{ subtitulo }}</h2>
        
    </div>
</template>




<script>

import { ref} from 'vue'


const nombre = ref();
const id = ref();
const edad = ref();
const profesion = ref();

 const miFormulario = async () => {

    const dataForBackend = {
        id: id.value,
        nombre: nombre.value,
        edad: edad.value,
        profesion: profesion.value

    }

     await fetch('http://localhost:4000/api/clientes', {
        method: 'POST',
        body: JSON.stringify(dataForBackend)
    })

    console.log(dataForBackend);
}

console.log(miFormulario.json)

export default {
    name: 'MiComponente', //Nombre de la etiqueta

    data() {
        return {
            subtitulo: 'Soy el subtitulo de mi componente',

        }
    }
}


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



// mounted() {
// fetch('http://localhost:4000/')
// .then(data => {
//     this.datos = data;
//   })

// }





</script>

<style scoped></style>