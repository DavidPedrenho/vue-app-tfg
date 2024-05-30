<template>

    <form @submit.prevent="submitFormPlayers">
        <div class="max-w-screen-md mx-auto w-full flex flex-col items-center">

            <div class="sm:grid sm:grid-cols-2 gap-x-6 grid-row-1  mb-10 sm:mb-0  w-full   ">

                <div class="w-full  flex flex-col items-center my-6">
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="card-title label-text text-2xl font-sans">Nombre de usuario</span>
                        </div>
                        <input type="text" placeholder="usuario" maxlength="15" v-model="formDataPlayer.nameUser"
                            required
                            class="input input-bordered input-primary  w-full rounded-xl placeholder:text-gray-700 font-sans text-gray-300" />
                    </label>
                </div>

                <div class="min-w-full flex flex-col items-center my-6">
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="card-title label-text text-2xl font-sans">Añadir foto</span>
                        </div>
                        <input type="file" placeholder="usuario" maxlength="15"
                            class="file-input file-input-bordered input-primary file-input-primary  w-full rounded-xl placeholder:text-gray-700 font-sans text-gray-300" />
                    </label>
                </div>

            </div>



            <!-- HABILIDADES -->

            <div class="max-w-screen-md w-full flex flex-wrap  gap-6 sm:grid sm:grid-cols-2">

                <div v-for="(category, categoryName) in formDataPlayer.habilidades" :key="categoryName"
                    class="card w-full">
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
                                                class="range range-xs w-full">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div class="flex justify-end w-full sm:w-1/2">
                <div class="flex flex-row gap-4 sm:gap-6 w-full   mt-6">
                    <button @click="clearFormPlayer"
                        class="btn border-2 border-primary text-primary flex-1 font-sans tracking-wider rounded-xl">Limpiar</button>
                    <button @click="submitFormPlayers"
                        class="btn btn-secondary flex-1 font-sans tracking-wider rounded-xl">Crear Jugador</button>
                </div>
            </div>



        </div>
        <div>
            <button class="btn" @click="getFormData">Obtener Datos del Formulario</button>
            <button class="btn" @click="deleteElement">Borrar Datos del Formulario</button>
        </div>

    </form>



</template>



<script>
/* eslint-disable */

export default {
    data() {
        return {



            formDataPlayer: {
                nameUser: '',
                imgUser: '',
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
                },
                nPartidos: '',
                nMVP: ''
            },

            listPlayers: []

        };



    },
    mounted() {
        // Recuperar la lista de jugadores del localStorage al cargar el componente
        const storedListPlayers = localStorage.getItem('listPlayers');
        if (storedListPlayers) {
            this.listPlayers = JSON.parse(storedListPlayers);
        }
    },

    methods: {


        submitFormPlayers() {
            // Hacemos un push en la lista de Jugadores
            this.listPlayers.push({ ...this.formDataPlayer });

            // Guardamos la lista actualizada en localStorage
            localStorage.setItem('listPlayers', JSON.stringify(this.listPlayers));

            
        },




        clearFormPlayer() {
            window.location.reload();
        },

        getFormData() {
            console.log(this.listPlayers)


        },
        deleteElement(index) {
            this.listPlayers.splice(11, 1);

            // Guardar el array actualizado en localStorage
            localStorage.setItem('listPlayers', JSON.stringify(this.listPlayers));
        }
    }
};
</script>
