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


            <div v-for="(category, categoryName) in habilidades" :key="categoryName" class="card w-96 mb-8">

<div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-base-200">
    <input type="checkbox" class="peer" />

    <div class="grid grid-row-2 font-sans text-sm collapse-title text-l">

        <div class="flex place-content-between mx-3 tracking-wider">
            <div class="card-title text-xl text-gray-300">{{ categoryName }}</div>
            <div class="card-title text-xl text-accent">63</div>
        </div>


        <ul>

            <!-- Habilidades específicas -->
            <li v-for="(skill, index) in category" :key="index">

                <div class="grid gap-y-4 font-sans text-sm collapse-title text-l ">
                    <div class="w-full ">
                        <div class="flex place-content-between ">
                            <div class="text-l text-gray-400">{{ skill.name }}</div>
                            <div class="text-l text-gray-400">{{ skill.value }}</div>
                        </div>
                        <!-- <input type="range" id="rangeInput" min="0" max="100" v-model="this.habilidades.skill[index].value"
                            class="range range-sm range-primary w-full"> -->
                        <!-- <input type="range" id="rangeInput" min="0" max="100" v-model="rangeValue"
                            class="range range-sm range-primary w-full"> -->
                    </div>

                </div>
            </li>


        </ul>
    </div>

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
