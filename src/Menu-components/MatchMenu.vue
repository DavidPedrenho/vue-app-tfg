<template>
    <div class="max-w-screen-md mx-auto flex flex-col  w-full mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        <Match v-for="n in 12" :key="n" ></Match>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import Match from '../components/Match/Match-components.vue'

export default {

  components: {
    Match,

  },

  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>