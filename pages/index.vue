<template>
    <main class="px-8 pt-16 lg:pt-8 sm:px-10 lg:pr-24 flex flex-col gap-y-5">
        <hero-main />
        <grid-main />
        <call-me />
    </main>
</template>

<script>
import heroMain from "~~/components/hero-main.vue";
export default {
  components: { heroMain },
};
</script>