<template>
    <div>
        <div class="h-screen w-screen flex md:flex-row flex-col justify-center items-center gap-5 ">
            <div class="card w-96 bg-base-100 shadow-xl border-4 border-neutral">
                <div class=" h-auto text-8xl">
                    <h1 class=" mt-7 text-gray-300 tracking-tighter text-center"> 3 - 6</h1>
                </div>
                <div class="card-body gap-5">
                    <div>
                       
                        <div class="flex flex-wrap items-center gap-2 ">
                            <div class="badge badge-secondary font-sans p-3">14/05/24</div>
                            <div class="badge badge-primary font-sans p-3">Pabellón Mun. de La Unión</div>
                            <div class="badge badge-secondary font-sans p-3">20:00 p.m.</div>
                            <div class="badge badge-accent font-sans p-3">MVP: Perico_garcia34</div>

                        </div>
                    </div>

                    <!--  JUGADORES PARTIDO -->

                    <div tabindex="0" class="collapse collapse-arrow mt-3 border border-base-300 bg-base-200">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title text-xl text-left ml-1 font-sans text-gray-400">
                            Jugadores
                        </div>
                        <div class="collapse-content  gap-3  text-gray-500">


                            <div class="grid grid-cols-2 font-sans text-sm py-4 gap-3 text-secondary text-opacity-55 mr-2 w-full">
                                <span>Juanillos_truck1</span>
                                <span>Juanillos_truck2</span>
                                <span>Juanillos_truck3</span>
                                <span>Juanillos_truck4</span>
                                <span>Juanillos_truck</span>
                                <span>Juanillos_truck</span>


                            </div>

                            <div
                                class="grid grid-cols-2 font-sans text-sm py-4 gap-3 text-primary text-opacity-80 border-t-2 border-opacity-5 border-white mr-2 w-full">
                                <span>Juanillos_truck1</span>
                                <span>Juanillos_truck2</span>
                                <span>Juanillos_truck3</span>
                                <span>Juanillos_truck4</span>
                                <span>Juanillos_truck</span>
                                <span>Juanillos_truck</span>

                            </div>



                        </div>
                    </div>


                    <!-- COMENTARIOS -->
                    <div>
                        <h2 class="card-title text-xl my-3 font-sans text-gray-400 ">
                            Comentarios:
                        </h2>

                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 ">
                            <input v-on:click="textoEntero()" type="checkbox" class="peer" />
                            <div :class="[isExpanded ? 'text-gray-400' : 'text-gray-600']"
                                class=" font-sans text-sm collapse-title italic text-left text-l  ">
                                "{{ isExpanded ? fullText : textoAcortado }}"

                            </div>

                        </div>
                    </div>





                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MatchComponent',
    data() {
        return {
            fullText: "Este es el texto completo que muestra los detalles del partido, hay que poner un max-lenght de 200 en el formulario. Este es el texto completo que muestra los detalles del partido, hay que poner un max-lenght de 200 en el formulario",
            isExpanded: false
        };
    },
    computed: {

        textoAcortado() {
            return this.fullText.substring(0, 60) + '...'; //Como hacíamos en Java con los ejercicios de string
        }

    },

    methods: {
        textoEntero() {
            this.isExpanded = !this.isExpanded;
        }
    }
};

</script>