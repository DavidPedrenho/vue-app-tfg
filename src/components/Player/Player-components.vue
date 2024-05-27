<template>
  <div>
    <br>
    <br>
    



    <!-- Jugador-->

    <div class="h-screen w-screen flex md:flex-row flex-col justify-center items-center gap-5 ">
      <div class="card w-96 bg-base-100 shadow-xl border-4 border-neutral">
        <figure><img src="https://img.europapress.es/fotoweb/fotonoticia_20141217071751_690.jpg" alt="Shoes" />
        </figure>
        <div class="card-body gap-5">
          <div>
            <h2 class="card-title font-sans text-2xl ml-1 mb-2 text-gray-300">
              Mi componente
            </h2>
            <div class="flex flex-row items-center gap-2">
              <div class="badge badge-secondary font-sans p-3">Nº de partidos: 32</div>
              <div class="badge badge-accent font-sans p-3">MVP: 6</div>
            </div>
          </div>

          <!--  HABILIDADES -->

          <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
            <input type="checkbox" class="peer" /> 
            <div class="collapse-title text-xl text-left ml-1 font-sans text-gray-400">
              Habilidades
            </div>
            <div class="collapse-content grid  grid-cols-3 grid-rows-2 grid-flow-col gap-4 font-sans text-gray-500">
              <div >
                <p class="font-bold text-gray-400">RIT</p>
                <p >80</p>
              </div>
              <div >
                <p class="font-bold text-gray-400">TIR</p>
                <p >63</p>
              </div>
              <div >
                <p class="font-bold text-gray-400">PAS</p>
                <p >81</p>
              </div>
              <div >
                <p class="font-bold text-gray-400">REG</p>
                <p >79</p>
              </div>
              <div >
                <p class="font-bold text-gray-400">DEF</p>
                <p >87</p>
              </div>
              <div >
                <p class="font-bold text-gray-400">FIS</p>
                <p >72</p>
              </div>

            </div>
          </div>



          <div class="flex flex-row gap-2 font-sans justify-end w-full">
            <button class="btn  btn-secondary w-1/4">Local</button>
            <button class="btn btn-primary w-1/4">Visitante</button>
          </div>
        </div>
      </div>
    </div>














    <br />
    <br />





  </div>

</template>



<script>
//GRAFICO DE RADAR(CLIP-PATH)
</script>



<style>
.border-neutral {
  --tw-border-opacity: 0.3;
  border-color: var(--fallback-n, oklch(var(--n)/var(--tw-border-opacity)));
}
</style>