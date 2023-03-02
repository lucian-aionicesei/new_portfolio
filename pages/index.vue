<template>
    <main class="pt-8 pl-10 pr-24 flex flex-col gap-y-5">
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