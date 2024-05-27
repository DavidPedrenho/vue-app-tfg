<template>
    

    <div class="flex  flex-wrap justify-center  gap-4">

        <!-- RITMO -->
        <div class="card w-96 ">

            <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-base-200">
                <input v-on:click="Expanded(0)" type="checkbox" class="peer" />

                <div class="grid grid-row-2 font-sans text-sm collapse-title text-l">

                    <div class="flex place-content-between mx-3">
                        <div class="card-title text-xl text-accent">Ritmo</div>
                        <div class="card-title text-xl text-accent">81</div>
                    </div>

                    <!-- Habilidades específicas -->
                    <div v-if="collapses[0].isExpanded">

                        <div class="grid gap-y-4 font-sans text-sm collapse-title text-l ">
                            <div class="w-full ">
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Aceleración</div>
                                    <div class="text-l text-gray-400">82</div>
                                </div>
                                <progress class="progress progress-secondary" value="68" max="100"></progress>
                            </div>

                            <div>
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Velocidad</div>
                                    <div class="text-l text-gray-400">74</div>
                                </div>
                                <progress class="progress progress-secondary " value="45" max="100"></progress>
                            </div>



                        </div>
                    </div>
                </div>



            </div>
        </div>

        <!-- TIRO -->
        <div class="card w-96 ">

            <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-base-200">
                <input v-on:click="Expanded(1)" type="checkbox" class="peer" />

                <div class="grid grid-row-2 font-sans text-sm collapse-title text-l">

                    <div class="flex place-content-between mx-3">
                        <div class="card-title text-xl text-accent">Tiro</div>
                        <div class="card-title text-xl text-accent">74</div>
                    </div>

                    <!-- Habilidades específicas -->
                    <div v-if="collapses[1].isExpanded">

                        <div class="grid gap-y-4 font-sans text-sm collapse-title text-l ">
                            <div class="w-full ">
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Definición</div>
                                    <div class="text-l text-gray-400">68</div>
                                </div>
                                <progress class="progress progress-secondary" value="68" max="100"></progress>
                            </div>

                            <div>
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Potencia de tiro</div>
                                    <div class="text-l text-gray-400">48</div>
                                </div>
                                <progress class="progress progress-secondary " value="45" max="100"></progress>
                            </div>

                            <div>
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Tiro lejano</div>
                                    <div class="text-l text-gray-400">42</div>
                                </div>
                                <progress class="progress progress-secondary " value="42" max="100"></progress>
                            </div>



                        </div>
                    </div>
                </div>



            </div>
        </div>


        <!--PASES -->
        <div class="card w-96 ">

            <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-base-200">
                <input v-on:click="Expanded(2)" type="checkbox" class="peer" />

                <div class="grid grid-row-2 font-sans text-sm collapse-title text-l">

                    <div class="flex place-content-between mx-3">
                        <div class="card-title text-xl text-accent">Pases</div>
                        <div class="card-title text-xl text-accent">87</div>
                    </div>

                    <!-- Habilidades específicas -->
                    <div v-if="collapses[2].isExpanded">

                        <div class="grid gap-y-4 font-sans text-sm collapse-title text-l ">
                            <div class="w-full ">
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Visión</div>
                                    <div class="text-l text-gray-400">75</div>
                                </div>
                                <progress class="progress progress-secondary" value="75" max="100"></progress>
                            </div>

                            <div>
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Centros</div>
                                    <div class="text-l text-gray-400">48</div>
                                </div>
                                <progress class="progress progress-secondary " value="45" max="100"></progress>
                            </div>

                            <div>
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Pase corto</div>
                                    <div class="text-l text-gray-400">73</div>
                                </div>
                                <progress class="progress progress-secondary " value="42" max="100"></progress>
                            </div>

                            <div>
                                <div class="flex place-content-between ">
                                    <div class="text-l text-gray-400">Pase largo</div>
                                    <div class="text-l text-gray-400">79</div>
                                </div>
                                <progress class="progress progress-secondary " value="79" max="100"></progress>
                            </div>



                        </div>
                    </div>
                </div>



            </div>
        </div>




        <!-- -------------------------------------------- -->

    </div>


</template>

<script>
/* eslint-disable */

export default {
    name: 'MatchComponent',
    data() {
        return {
            collapses: [
                { collapse: 'ritmo', isExpanded: false },
                { collapse: 'tiro', isExpanded: false },
                { collapse: 'pases', isExpanded: false },
                { collapse: 'regates', isExpanded: false },
                { collapse: 'defensa', isExpanded: false },
                { collapse: 'físico', isExpanded: false },
            ]

        };
    },
    computed: {



    },

    methods: {
        Expanded(index) {
            this.collapses[index].isExpanded = !this.collapses[index].isExpanded
        }
    }
};
</script>
