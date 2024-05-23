<template>
    <div>



     <!-- HEXAGONO -->
        <VueApexCharts type="radar" :options="chartOptions" :series="series"></VueApexCharts>

    </div>


</template>


<script>


import VueApexCharts from 'vue3-apexcharts';

export default {
    name: 'Hexagono-componet',
    components: {
        VueApexCharts
    },
    data() {
        return {
            series: [{
                name: 'Series 1',
                data: [82, 50, 30, 40, 100, 20],

            }],
            chartOptions: {
                chart: {
                    height: 250,
                    type: 'radar',


                },
                title: {
                    text: ''
                },

                yaxis: {
                    stepSize: 100,
                    labels: {
                        style: {
                            fontSize: '0px', // Cambia el tamaño de la fuente de las etiquetas del eje Y

                        }
                    }

                },
                xaxis: {
                    categories: ['RIT', 'TIR', 'PAS', 'REG', 'DEF', 'FIS'],
                    labels: {
                        style: {
                            color: 'red',
                            fontSize: '10px',

                        }
                    }
                },
                markers: {
                    size: 0, // Cambia el tamaño de los marcadores en el gráfico

                },
                fill: {

                },
            },
        };
    },
};
console.log(VueApexCharts)
</script>



<style>


</style>