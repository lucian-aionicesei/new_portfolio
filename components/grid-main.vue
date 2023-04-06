<template>
    <section class="flex flex-col lg:grid grid-cols-[1fr_0.2fr_1fr] gap-5 2xl:container 2xl:mx-auto">
            <article class=" aspect-[4/3] h-auto w-full bg-red-400 text-primary">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <a href="#">
                        <expand-icon></expand-icon>
                    </a>
                </div>
            </article>
            <article class=" aspect-[4/3] lg:aspect-auto h-full w-full col-span-2 bg-dark-gray text-primary">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <a href="#">
                        <expand-icon></expand-icon>
                    </a>
                </div>
            </article>
            <article class="aspect-[4/3] lg:aspect-auto h-full w-full col-span-2 bg-blue-500 text-primary">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <a href="#">
                        <expand-icon></expand-icon>
                    </a>
                </div>
            </article>
            <article class="aspect-[4/3] h-full w-full bg-[#CFF0A5]">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <a href="#">
                        <expand-icon></expand-icon>
                    </a>
                </div>
            </article>
            <article class="aspect-[4/3] h-full w-full bg-dark-gray text-primary">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <a href="#">
                        <expand-icon></expand-icon>
                    </a>
                </div>
            </article>
            <article class="aspect-[4/3] lg:aspect-auto h-full w-full col-span-2 bg-yellow-300">
                <div class="p-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-lg">The most recent project</h4>
                        <p class="text-lg">Website portfolio 2.0</p>
                    </div>
                    <a href="#">
                        <expand-icon></expand-icon>
                    </a>
                </div>
            </article>
    </section>
</template>

<script>
import expandIcon from "./expand-icon.vue";
export default {
  components: { expandIcon },
};
</script>