<template>
    <div class="pt-8 flex flex-col gap-y-3">
        <hero-main />
        <section class="theme-grid pl-10 pr-24 gap-5">
            <article class=" h-96 w-full bg-red-400">

            </article>
            <article class=" h-96 w-full col-span-2 bg-secondary">

            </article>
            <article class=" h-96 w-full col-span-2 bg-secondary">

            </article>
            <article class=" h-96 w-full bg-[#CFF0A5]">

            </article>
            <article class=" h-96 w-full bg-red-400">

            </article>
            <article class=" h-96 w-full col-span-2 bg-secondary">
            
            </article>
        </section>
    </div>
</template>

<script>
import heroMain from "~~/components/hero-main.vue";
export default {
  components: { heroMain },
};
</script>