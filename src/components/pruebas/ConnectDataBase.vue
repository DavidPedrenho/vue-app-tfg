<template>
    <p>Este es mi componente</p>
    <button @click = "connectDataBase" class = "btn">Esto es mi botón</button>
    <p> {{ myData }}</p>
</template>

<script setup>

const connectDataBase = async () => {
    await fetch("http://localhost:4051/user")
        .then(data => {
            data.json()
        })
        .catch(err => {
            console.log(err)
        })
}


</script>