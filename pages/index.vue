<template>
    <main class="px-8 pt-16 lg:pt-8 sm:px-10 lg:pr-24 flex flex-col gap-y-5">
        <hero-main />
        <grid-main />
        <call-me />
        <article class="fixed top-0 left-0 z-50 h-screen w-screen flex justify-end px-8 pt-14 lg:pt-16 sm:px-10 lg:pr-24">
          <div class="absolute z-0 w-full h-full top-0 left-0 bg-white opacity-40"></div>
          <section class="w-full h-full z-10 overflow-y-scroll gap-y-10 bg-emerald-300">
            <div class=" sticky top-0 w-full h-20 bg-white flex justify-between md:grid grid-cols-[1fr_0.2fr_1fr] md:gap-x-5">
              <div class="flex justify-between items-center">
                <p class=" font-bold text-lg p-0 pl-5">Lucian Aionicesei</p>
                <p class="hidden lg:block text-base p-0">Frontend developer</p>
              </div>
              <ul class=" col-start-3 w-full h-full items-center justify-end flex gap-x-5 px-5 bg-red-300">
                <li class="w-16 h-16"></li>
                <li class="w-16 h-16"></li>
              </ul>
            </div>
            <div class=" h-64 w-64 bg-sky-800 mb-5"></div>
            <div class=" h-64 w-64 bg-sky-800 mb-5"></div>
            <div class=" h-64 w-64 bg-sky-800 mb-5"></div>
            <div class=" h-64 w-64 bg-sky-800 mb-5"></div>
            <div class=" h-64 w-64 bg-sky-800 mb-5"></div>
            <div class=" h-64 w-64 bg-sky-800 mb-5"></div>
          </section>
        </article>
    </main>
</template>

<script>
import heroMain from "~~/components/hero-main.vue";
export default {
  components: { heroMain },
};
</script>