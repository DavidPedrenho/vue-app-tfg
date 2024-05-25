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
                        <button v-on:click="toggleActiveLocal('button1')"
                            class="btn join-item btn-secondary ">Físico</button>
                        <p v-if="activeButtonsLocal.button1" class="mt-1 text-gray-400">M: 87</p>
                    </div>

                    <div>
                        <button v-on:click="toggleActiveLocal('button2')"
                            class="btn join-item btn-secondary ">Defensivo</button>
                        <p v-if="activeButtonsLocal.button2" class="mt-1 text-gray-400">M: 74</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveLocal('button3')"
                            class="btn join-item btn-secondary ">Ofensivo</button>
                        <p v-if="activeButtonsLocal.button3" class="mt-1 text-gray-400">M: 63</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveLocal('button4')"
                            class="btn join-item btn-secondary ">Táctico</button>
                        <p v-if="activeButtonsLocal.button4" class="mt-1 text-gray-400">M: 79</p>
                    </div>



                </div>

            </div>



            <div class="w-1/2">


                <div class=" join inline-flex w-full gap-2 sm:my-0 my-1 sm:justify-center ">

                    <div>
                        <button v-on:click="toggleActiveVisitante('button1v')"
                            class="btn join-item btn-primary">Físico</button>
                        <p v-if="activeButtonsVisitante.button1v" class="mt-1 text-gray-400">M: 87</p>
                    </div>

                    <div>
                        <button v-on:click="toggleActiveVisitante('button2v')"
                            class="btn join-item btn-primary ">Defensivo</button>
                        <p v-if="activeButtonsVisitante.button2v" class="mt-1 text-gray-400">M: 74</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveVisitante('button3v')"
                            class="btn join-item btn-primary ">Ofensivo</button>
                        <p v-if="activeButtonsVisitante.button3v" class="mt-1 text-gray-400">M: 63</p>
                    </div>
                    <div>
                        <button v-on:click="toggleActiveVisitante('button4v')"
                            class="btn join-item btn-primary">Táctico</button>
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