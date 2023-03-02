<template>
    <section class="theme-grid gap-5">
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
            <article class=" h-full w-full col-span-2 bg-secondary text-primary">
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
            <article class=" h-full w-full col-span-2 bg-blue-400 text-primary">
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
            <article class="aspect-[4/3] h-full w-full bg-secondary text-primary">
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
            <article class=" h-full w-full col-span-2 bg-yellow-300">
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