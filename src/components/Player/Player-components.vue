<template>
  <div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src="https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">MANOLO</h2>
        <div class="">
          <p>Nº de partidos: 3</p>
          <p>MVP: -</p>
        </div>

        <div class="card-actions">
          <div class="collapse bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">HABILIDADES</div>
            <div class="collapse-content">
              <ul>
                <li>Físico: 45</li>
                <li>Defensa: 89</li>
                <li>Ataque: 63</li>
                <li>Ritmo: 78</li>
              </ul>
            </div>
          </div>
          <div  class="join join-vertical lg:join-horizontal">
            <button class="btn join-item bg-red-500 text-white">EQUIPO 1</button>
            <button class="btn join-item  bg-blue-500 text-white">EQUIPO 2</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
</script>

 

<style>
.card {
  border: 3px solid;
  border-radius: 5px;
  width: 25%;
}

.card-title {
  color: secondary;
}

.collapse {
  border: 3px solid;
  border-radius: 5px;
  border-color: rgb(93, 193, 70);
}

.collapse-content {
  background-color: rgb(93, 193, 70);
}

/* BOTONES EQUIPOS */

.join{

  display: flex !important;
  justify-content: center !important;

}


</style>