<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ texto }}</h2>
    
    <MiComponente></MiComponente>

    <div
                class="grid flex-grow justify-center items-center h-32 card bg-base-300 border-4 border-secondary rounded-box flex-1">
                
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-secondary">
                    LOCAL
                </h2>
                <div>
                    <span>Pepe</span>
                    <span>Pepe</span>
                    <span>Pepe</span>
                </div>
                
            </div>

  </div>
</template>

<script>

import MiComponente from './MiComponente.vue';


export default {
  name: 'HelloWorld',
  components: {
    MiComponente
  },
  props: {
    msg: String
  },
  data(){ ///PROPIEDADES QUE QUIERO MOSTRAR POR LA VISTA
    return{
      texto: "Hola mundo2"
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
