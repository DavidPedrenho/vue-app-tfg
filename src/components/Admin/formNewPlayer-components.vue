<template>

    <!-- <div id="app" class="max-w-md mx-auto">
        <label for="rangeInput" class="block mb-2 text-lg font-medium text-gray-700">Selecciona un valor:</label>
        <input type="range" id="rangeInput" min="0" max="100" v-model="rangeValue"
            class="range range-sm range-primary w-full">
        <p class="mt-4">Valor seleccionado: {{ rangeValue }}</p>
    </div> -->


    <!-- --------------------------- -->


    <div v-for="(category, categoryName) in habilidades" :key="categoryName" class="card w-96 mb-8">

        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
        <input type="checkbox" class="peer" />

            <div class="grid grid-row-2 font-sans text-sm collapse-title text-l">

                <div class="flex place-content-between mx-3 tracking-wider">
                    <div class="card-title text-xl text-gray-300">{{ categoryName }}</div>
                    <div class="card-title text-xl text-accent">63</div>
                </div>

            </div>

            <div class="collapse-content grid gap-y-4 font-sans text-sm collapse-title text-l ">

                <ul>
                    <!-- Habilidades específicas -->
                    <li v-for="(skill, index) in category" :key="index">


                        <div class="w-full ">
                            <div class="flex place-content-between ">
                                <div class="text-l text-gray-400">{{ skill.name }}</div>
                                <div class="text-l text-gray-400">{{ skill.value }}</div>
                            </div>
                            <div id="app" class="max-w-md mx-auto">
                                <input type="range" id="rangeInput" min="1" max="99" v-model="skill.value"
                                    class="range range-sm range-primary w-full">

                            </div>

                        </div>

                    </li>



                </ul>
            </div>

        </div>
    </div>


    <!-- </div> -->


</template>



<script>
/* eslint-disable */

export default {
    data() {
        return {
            rangeValue: 50,
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
