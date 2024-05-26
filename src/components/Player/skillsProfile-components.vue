<template>
    <div>
        <progress class="progress progress-success w-56" value="0" max="100"></progress>
        <progress class="progress progress-success w-56" value="10" max="100"></progress>
        <progress class="progress progress-success w-56" value="40" max="100"></progress>
        <progress class="progress progress-success w-56" value="70" max="100"></progress>
        <progress class="progress progress-success w-56" value="100" max="100"></progress>
    </div>


    <div>
        <h2 class="card-title text-2xl my-3 font-sans text-gray-400 ">
            Comentarios:
        </h2>

        <div tabindex="0" class="collapse collapse-arrow flex flex-wraps w-96  border border-base-300 bg-base-200">
            <input v-on:click="Expanded()" type="checkbox" class="peer" />

            <div v-if="isExpanded" class="grid grid">
                <div class=" font-sans text-sm collapse-title italic text-left text-l  ">
                <progress class="progress progress-secondary w-56" value="45" max="100"></progress>
                <progress class="progress progress-secondary w-56" value="10" max="100"></progress>
                <progress class="progress progress-secondary w-56" value="40" max="100"></progress>
                <progress class="progress progress-secondary w-56" value= "32" max="100"></progress>
                <progress class="progress progress-secondary w-56" value="100" max="100"></progress>

                </div>
            </div>
            

        </div>
    </div>

</template>

<script>
/* eslint-disable */

export default {
    name: 'MatchComponent',
    data() {
        return {
            isExpanded: false,
            value2 : 25
            
            
        };
    },
    computed: {

        

    },

    methods: {
        Expanded() {
            this.isExpanded = !this.isExpanded;
        }
    }
};
</script>
