<template>
    <div class="max-w-screen-md mx-auto flex flex-col mt-6 ">
    
    
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        <PlayerComponents v-for="n in 12" :key="n" ></PlayerComponents>
      </div>
    </div>
  
</template>
<script>
/* eslint-disable */

import PlayerComponents from '../components/Player/Player-components.vue';

export default {
  components: {
    PlayerComponents

  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>