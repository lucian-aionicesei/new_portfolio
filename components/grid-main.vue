<template>
    <section class="flex flex-col lg:grid grid-cols-[1fr_0.2fr_1fr] gap-5 2xl:container 2xl:mx-auto">
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-red-400 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon></expand-icon>
                </div>
                <img class=" px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full col-span-2 bg-dark-gray text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon></expand-icon>
                </div>
                <img class=" px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/asgaard_fest 1.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full col-span-2 bg-blue-500 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon></expand-icon>
                </div>
                <img class=" px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/asgaard_fest 1.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-green-400">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon></expand-icon>
                </div>
                <img class=" px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article @click='toggleProject' class="aspect-[4/3] h-full w-full bg-dark-gray text-primary">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon></expand-icon>
                </div>
            </article>
            <article @click='toggleProject' class="aspect-[4/3] lg:aspect-auto h-full w-full col-span-2 bg-yellow-300">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon></expand-icon>
                </div>
            </article>
    </section>
</template>

<script setup>
import { useCoreStore } from "~/stores/core";

const coreStore = useCoreStore();

const showProject = computed(() => {
  return coreStore.getShowProject;
});

const toggleProject = () => {
  coreStore.showProject = !coreStore.showProject;
};
</script>