<template>
  <div>
    <h1>Prueba componente</h1>
    <form @submit.prevent="miFormulario">
      <label > id:</label><br />
      <input v-model= "id" type="text" /><br />
      <label > name:</label><br />
      <input v-model= "userName" type="text" /><br />
      <label>es jugador</label><br />
      <input v-model = "isPlayer" type="text" />
      <input type="submit" value="Submit" class="btn ">
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue'

let id = ref()
let userName = ref()
let isPlayer = ref()



// const miFormulario = async () => {


//   const dataForBackend = {
//     id : id.value,
//     userName: userName.value,
//     isPlayer: isPlayer.value
// }

//       const response = await fetch('http://localhost:4051/create-user', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json' //tipo de contenido
//          },
//         body: JSON.stringify(dataForBackend )
        
//       });

//       console.log(dataForBackend)

//       if (response.ok) {
//         alert('Usuario creado');
//       } else {
//         alert('Error al crear usuario. En Vue');
//       }
//     }     

// const miFormulario = async () => {

// const dataForBackend = {
//     userName: userName.value,
//     isPlayer: isPlayer.value
    
// }
// await fetch('http://localhost:4050/create-user', {
//         method: 'POST',
//         body: JSON.stringify(dataForBackend)
//     })
 


</script>
