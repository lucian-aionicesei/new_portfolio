<template>
    <main class="p-8 pt-8 sm:px-10 mt-20 flex flex-col gap-y-5">
        <hero-about></hero-about>
        <profile-about></profile-about>
        <skills-about></skills-about>
        <grid-about></grid-about>
    </main>
</template>

<script>
import heroAbout from "~~/components/hero-about.vue";
export default {
  components: { heroAbout },
};
</script>