<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-screen-md mx-auto">
    <!-- Lugar -->
    <div class="flex flex-wrap">
      <label class="form-control w-full">
        <div class="label">
          <span class="card-title label-text text-2xl font-sans ml-2 sm:ml-0">Lugar</span>
        </div>
        <input type="text" placeholder="Lugar" maxlength="26"
          class="input input-bordered input-primary w-full rounded-xl font-sans text-gray-300" />
      </label>
    </div>

    <!-- Fecha -->
    <div class="flex flex-wrap">
      <label class="form-control w-full">
        <div class="label">
          <span class="card-title label-text text-2xl font-sans ml-2 sm:ml-0">Fecha</span>
        </div>
        <input type="date" v-model="date"
          class="input input-bordered input-primary w-full rounded-xl placeholder:text-gray-700 font-sans text-gray-300" />
      </label>
    </div>

    <!-- Hora -->
    <div class="flex flex-wrap">
      <label class="form-control w-full">
        <div class="label">
          <span class="card-title label-text text-2xl font-sans ml-2 sm:ml-0">Hora</span>
        </div>
        <input type="time" v-model="date" min="09:00" max="22:00" required
          class="input input-bordered input-primary w-full rounded-xl placeholder:text-gray-700 font-sans text-gray-300" />
      </label>
    </div>

    <!-- Nº de jugadores -->
    <div class="flex flex-wrap">
      <label class="form-control w-full">
        <div class="label">
          <span class="card-title label-text text-2xl font-sans ml-2 sm:ml-0">Nº de jugadores</span>
        </div>
        <input type="number" placeholder="Nº jugadores" maxlength="15"
          class="input input-bordered input-primary w-full rounded-xl font-sans text-gray-300" />
      </label>
    </div>

    <!-- Lista jugadores -->
    <div class="col-span-1 sm:col-span-2 my-6">
      <div tabindex="0" class="collapse collapse-arrow border border-primary">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl text-left ml-1 font-sans text-gray-400">
          Añadir Jugadores
        </div>
        <div class="collapse-content gap-3 text-gray-500">
          <div
            class="grid grid-cols-1 sm:grid-cols-2  gap-y-4 sm:gap-y-0 gap-x-32 font-sans text-sm py-4 text-secondary text-opacity-55 mr-2 w-full px-6 ">
            <label v-for="(item, index) in items" :key="index" class="cursor-pointer label flex items-center   place-content-between">
              <span class="label-text !text-lg">{{ item.label }}</span>
              <input type="checkbox" v-model="item.checked" class="checkbox checkbox-secondary" />
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Botones -->
    <div>
      <button v-on:click="submit"
        class="btn border-primary w-full font-sans text-primary tracking-wider rounded-xl text-xl">Limpiar</button>
    </div>
    <div>
      <button v-on:click="submit" class="btn btn-secondary w-full font-sans tracking-wider rounded-xl text-xl">Crear
        Partido</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      items: [
        { label: 'Remember me', checked: true },
        { label: 'Option 2', checked: false },
        { label: 'Option 3', checked: true },
        { label: 'Option 4', checked: false },
      ]
    };
  },
  methods: {
    submit() {
      console.log('Botón presionado');
    }
  }
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
