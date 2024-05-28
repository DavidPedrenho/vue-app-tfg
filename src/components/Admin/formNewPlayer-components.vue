<template>


    <div class="max-w-screen-lg mx-auto">

        <div class="my-6 ">

            <label class="form-control ">
                <div class="label">
                    <span class=" card-title label-text text-2xl font-sans">Nombre de usuario</span>

                </div>
                <input type="text" placeholder="usuario"
                    class="  input input-bordered input-primary sm:max-w-80 w-full  rounded-xl" />

            </label>
        </div>


        <!-- HABILIDADES -->

        <div class="max-w-screen-lg mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4 sm:grid sm:grid-cols-3">
            <div v-for="(category, categoryName) in habilidades" :key="categoryName" class="card w-full sm:max-w-80">
                <div tabindex="0" class="collapse collapse-arrow border border-primary bg-base-200">
                    <input type="checkbox" class="peer" />
                    <div class="font-sans text-sm collapse-title">
                        <div class="flex justify-between mx-3 tracking-wider">
                            <div class="card-title mt-2 text-lg text-gray-300">{{ categoryName }}</div>
                            <!-- <div class="card-title text-xl text-accent">63</div> -->
                        </div>
                    </div>
                    <div class="collapse-content gap-y-2 font-sans text-sm mt-2 text-l">
                        <ul>
                            <!-- Habilidades específicas -->
                            <li v-for="(skill, index) in category" :key="index" class="mb-4 mx-2">
                                <div class="w-full flex flex-col items-center">
                                    <div class="w-full flex justify-between mb-2">
                                        <div class="text-l text-gray-400">{{ skill.name }}</div>
                                        <div class="text-l text-gray-400">{{ skill.value }}</div>
                                    </div>
                                    <div class="w-full">
                                        <input type="range" id="rangeInput" min="1" max="99" v-model="skill.value"
                                            :class="[skill.value < 40 ? 'range-error' : (skill.value < 70 ? 'range-accent' : 'range-secondary')]"
                                            class="range range-sm w-full">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>




        <div class="flex justify-end ">
            <div class="flex flex-row gap-3 w-full sm:w-1/3 sm:px-3 mt-6">
                <button
                    class="btn border-2 border-primary text-primary flex-1 font-sans tracking-wider rounded-xl">Restablecer</button>
                <button class="btn btn-secondary flex-1 font-sans tracking-wider rounded-xl">Crear Jugador</button>
            </div>
        </div>



    </div>


</template>



<script>
/* eslint-disable */

export default {
    data() {
        return {

            habilidades: {
                Ritmo: [
                    { name: "Aceleración", value: 50 },
                    { name: "Velocidad", value: 50 }
                ],
                Tiro: [
                    { name: "Definición", value: 50 },
                    { name: "Potencia de tiro", value: 50 },
                    { name: "Tiro lejano", value: 50 }
                ],
                Pases: [
                    { name: "Visión", value: 50 },
                    { name: "Centros", value: 50 },
                    { name: "Pase corto", value: 50 },
                    { name: "Pase largo", value: 50 }
                ],
                Regate: [
                    { name: "Agilidad", value: 50 },
                    { name: "Regates", value: 50 },
                    { name: "Anticipación", value: 50 },
                    { name: "Equilibrio", value: 50 },
                    { name: "Control balón", value: 50 }
                ],
                Defensa: [
                    { name: "Intercepciones", value: 50 },
                    { name: "Robos", value: 50 },
                    { name: "Entradas", value: 50 },
                    { name: "Cap. defensiva", value: 50 },
                    { name: "Prec. cabezazo", value: 50 }
                ],
                Físico: [
                    { name: "Resistencia", value: 50 },
                    { name: "Fuerza", value: 50 },
                    { name: "Agresividad", value: 50 }
                ]
            }



        }


    },

    methods: {

    }
};
</script>
