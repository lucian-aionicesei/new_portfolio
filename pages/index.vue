<template>
    <main class="px-5 pt-16 lg:pt-8 mt-20 sm:px-10 flex flex-col gap-y-5">
        <hero-main />
        <grid-main />
        <call-me />
        <project />
    </main>
</template>

<script>
import heroMain from "~~/components/hero-main.vue";
export default {
  components: { heroMain },
};
</script>