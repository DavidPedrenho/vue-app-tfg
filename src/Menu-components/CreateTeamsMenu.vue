<template>
  <div class="max-w-screen-md mx-auto flex flex-col mt-6 ">
    <CreateTeamsComponent />
    <div class="w-full mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        <PlayerComponents v-for="n in 12" :key="n" ></PlayerComponents>
      </div>
    </div>
  </div>





</template>
<script>
/* eslint-disable */
import CreateTeamsComponent from '../components/Teams/CreateTeams-components.vue';
import PlayerComponents from '../components/Player/Player-components.vue';

export default {
  components: {
    CreateTeamsComponent,
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