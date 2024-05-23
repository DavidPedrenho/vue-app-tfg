<template>
    <div>
        <!-- DIVISOR EQUIPOS -->

        <div class="flex flex-col lg:flex-row max-w-4xl mx-auto">
            <div
                class="grid flex-grow justify-center items-center h-32 card bg-base-300 border-4 border-secondary rounded-box ">
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-secondary">
                    LOCAL
                </h2>
                <span>Pepe</span>
                <span>Pepe</span>
                <span>Pepe</span>
            </div>

            <div class="divider lg:divider-horizontal">VS</div>

            <div
                class="grid flex-grow justify-center items-center h-32 card bg-base-300 border-4 border-primary rounded-box ">
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-primary">
                    VISITANTE
                </h2>
                <span>Juan</span>
                <span>Juan</span>
                <span>Juan</span>
            </div>


        </div>

        <!-- MEDIAS EQUIPOS -->


        <!-- <div class="flex sm:space-x-6 lg:space-x-12  mt-4 lg:flex-row max-w-4xl mx-auto">
            <div
                class="grid flex-grow justify-center items-center h-32 card bg-base-300 border-4 border-secondary rounded-box ">
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-secondary">
                    LOCAL
                </h2>

            </div>



            <div
                class="grid flex-grow justify-center items-center  h-32 card bg-base-300 border-4 border-primary rounded-box ">
                <h2 class="font-sans mt-2 font-bold block text-l leading-tight text-primary">
                    VISITANTE
                </h2>

            </div>


        </div> -->

        <div class="flex max-w-4xl mx-auto justify-center">

            <div role="tablist" class="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab " aria-label="Tab 2" checked />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>

                <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
                <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>

            <div>
                <input type="radio" name="radio-5" class="radio radio-success" checked />
                <input type="radio" name="radio-5" class="radio radio-success" />
            </div>



        </div>



    </div>
</template>

<script>
</script>


<style></style>