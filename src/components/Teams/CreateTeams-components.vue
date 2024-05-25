<template>
    <div>
        <!-- DIVISOR EQUIPOS -->

        <div class="flex flex-col lg:flex-row max-w-4xl mx-auto">
            <div
                class="grid flex-grow justify-center items-center h-32 card bg-base-300 border-4 border-secondary rounded-box flex-1">
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-secondary">
                    LOCAL
                </h2>
                <span>Pepe</span>
                <span>Pepe</span>
                <span>Pepe</span>
            </div>

            <div class="divider lg:divider-horizontal">VS</div>

            <div
                class="grid flex-grow justify-center items-center h-32 card bg-base-300 border-4 border-primary rounded-box flex-1">
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-primary">
                    VISITANTE
                </h2>
                <span>Juan</span>
                <span>Juan</span>
                <span>Juan</span>
            </div>





        </div>

        <!-- MEDIAS EQUIPOS -->


        <div class="flex flex-col lg:flex-row max-w-4xl mx-auto sm:space-x-12 mt-4">



            <div class="w-1/2">


                <div class=" join inline-flex w-full gap-2 sm:my-0 my-1 sm:justify-center ">

                    <div>
                        <button  v-on:click="toggleActive('button1')" class="btn join-item btn-secondary ">Físico</button>
                        <p v-if= "activeButtons.button1" class="mt-1 text-gray-400">M: 87</p>
                    </div>

                    <div>
                        <button v-on:click="toggleActive('button2')" class="btn join-item btn-secondary ">Defensivo</button>
                        <p v-if= "activeButtons.button2" class="mt-1 text-gray-400">M: 74</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActive('button3')" class="btn join-item btn-secondary ">Ofensivo</button>
                        <p v-if= "activeButtons.button3" class="mt-1 text-gray-400">M: 63</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActive('button4')" class="btn join-item btn-secondary ">Táctico</button>
                        <p v-if= "activeButtons.button4" class="mt-1 text-gray-400">M: 79</p>
                    </div>
                    
                    

                </div>

            </div>



            <div class="w-1/2">

                <div class=" join inline-flex w-full gap-2 sm:my-0 my-1 ">

                    <button class="btn join-item btn-primary flex-1">Físico</button>
                    <button class="btn join-item btn-primary flex-1">Defensivo</button>
                    <button class="btn join-item btn-primary flex-1">Ofensivo</button>
                    <button class="btn join-item btn-primary flex-1">Táctico</button>

                </div>

            </div>



        </div>



    </div>
</template>

<script>
/* eslint-disable */


export default {
  name: 'CreateTeamsComponent',
  data() {
    return {
        activeButtons: {
        button1: false,
        button2: false,
        button3: false,
        button4: false,
      }
    };
  },
  methods: {
    
      
    toggleActive(button) {
         // Desactivar todos los botones
      for (let key in this.activeButtons) {
        this.activeButtons[key] = false;
      }
      // Activar solo el botón clicado
      this.activeButtons[button] = true;
    }
    
    
  }
};



</script>


<style></style>