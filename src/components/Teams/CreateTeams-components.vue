<template>
    <div>
        <!-- DIVISOR EQUIPOS -->

        <div class="flex flex-col md:space-x-6 lg:flex-row max-w-4xl w-full  mx-auto">
            <div
                class="flex md:w-1/2 bg-base-300 border-4 border-secondary rounded-box pb-1">

                <div class="grid w-full grid-cols-2">

                    <div class="flex items-center justify-center row-span-2">
                        <h2 class="grid font-sans  mt-4 font-bold text-2xl text-secondary">LOCAL</h2>
                    </div>

                    <div class="grid m-4 row-span-2 text-6xl ">73</div>

                    <div class="grid  grid-cols-2 row-start-3 col-span-2 m-2 text-xl gap-y-2">
                        <span>Pepillos truck</span>
                        <span>Pepillos truck</span>
                        <span>Pepillos truck</span>
                        <span>Pepillos truck</span>
                        <span>Pepillos truck</span>
                        <span>Pepillos truck</span>
                        
                    </div>

                </div>


            </div>

            <div class="divider lg:divider-horizontal text-xl">VS</div>

            <div
                class="flex md:w-1/2 bg-base-300 border-4 border-primary rounded-box pb-1">

                <div class="grid w-full grid-cols-2">

                    <div class="flex items-center justify-center row-span-2">
                        <h2 class="grid font-sans  mt-4 font-bold text-2xl text-primary">VISITANTE</h2>
                    </div>

                    <div class="grid m-4 row-span-2 text-6xl ">85</div>

                    <div class="grid  grid-cols-2 row-start-3 col-span-2 m-2 text-xl gap-y-2">
                        <span>Juanillos truck</span>
                        <span>Juanillos truck</span>
                        <span>Juanillos truck</span>
                        <span>Juanillos truck</span>
                        <span>Juanillos truck</span>
                        <span>Juanillos truck</span>
                        
                    </div>

                </div>


            </div>





        </div>

        <!-- MEDIAS EQUIPOS -->


        <div class="flex flex-col lg:flex-row max-w-4xl mx-auto sm:space-x-12 mt-4">



            <div class="w-1/2">


                <div class=" join inline-flex w-full gap-2 sm:my-0 my-1 sm:justify-center ">

                    <div>
                        <button v-on:click="toggleActiveLocal('button1')" class="btn join-item"
                            :class="[activeButtonsLocal.button1 ? 'btn-accent' : 'btn-secondary']">Físico</button>
                        <p v-if="activeButtonsLocal.button1" class="mt-1 text-gray-400">M: 87</p>
                    </div>

                    <div>
                        <button v-on:click="toggleActiveLocal('button2')" class="btn join-item"
                            :class="[activeButtonsLocal.button2 ? 'btn-accent' : 'btn-secondary']">Defensivo</button>
                        <p v-if="activeButtonsLocal.button2" class="mt-1 text-gray-400">M: 74</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveLocal('button3')" class="btn join-item"
                            :class="[activeButtonsLocal.button3 ? 'btn-accent' : 'btn-secondary']">Ofensivo</button>
                        <p v-if="activeButtonsLocal.button3" class="mt-1 text-gray-400">M: 63</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveLocal('button4')" class="btn join-item"
                            :class="[activeButtonsLocal.button4 ? 'btn-accent' : 'btn-secondary']">Táctico</button>
                        <p v-if="activeButtonsLocal.button4" class="mt-1 text-gray-400">M: 79</p>
                    </div>



                </div>

            </div>


            <!-- Medias visitante -->

            <div class="w-1/2">


                <div class=" join inline-flex w-full gap-2 sm:my-0 my-1 sm:justify-center ">

                    <div>
                        <button v-on:click="toggleActiveVisitante('button1v')" class="btn join-item"
                            :class="[activeButtonsVisitante.button1v ? 'btn-accent' : 'btn-primary']">Físico</button>
                        <p v-if="activeButtonsVisitante.button1v" class="mt-1 text-gray-400">M: 87</p>
                    </div>

                    <div>
                        <button v-on:click="toggleActiveVisitante('button2v')" class="btn join-item"
                            :class="[activeButtonsVisitante.button2v ? 'btn-accent' : 'btn-primary']">Defensivo</button>
                        <p v-if="activeButtonsVisitante.button2v" class="mt-1 text-gray-400">M: 74</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveVisitante('button3v')" class="btn join-item"
                            :class="[activeButtonsVisitante.button3v ? 'btn-accent' : 'btn-primary']">Ofensivo</button>
                        <p v-if="activeButtonsVisitante.button3v" class="mt-1 text-gray-400">M: 63</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveVisitante('button4v')" class="btn join-item"
                            :class="[activeButtonsVisitante.button4v ? 'btn-accent' : 'btn-primary']">Táctico</button>
                        <p v-if="activeButtonsVisitante.button4v" class="mt-1 text-gray-400">M: 79</p>
                    </div>



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
            activeButtonsLocal: {
                button1: false,
                button2: false,
                button3: false,
                button4: false,
                
            },

            activeButtonsVisitante: {
                button1v: false,
                button2v: false,
                button3v: false,
                button4v: false,
            }
            
        };
    },
    methods: {


        toggleActiveLocal(button) {
            // Desactivar todos los botones
            for (let key in this.activeButtonsLocal) {
                this.activeButtonsLocal[key] = false;
            }
            // Activar solo el botón clicado
            this.activeButtonsLocal[button] = true;
        },

        toggleActiveVisitante(button) {
            // Desactivar todos los botones
            for (let key in this.activeButtonsVisitante) {
                this.activeButtonsVisitante[key] = false;
            }
            // Activar solo el botón clicado
            this.activeButtonsVisitante[button] = true;
        }


    }
};



</script>


<style></style>