<template>
    <main class="px-5 pt-16 lg:pt-8 mt-20 sm:px-10 flex flex-col gap-y-5">
        <hero-main />
        <grid-main />
        <call-me />
        <project />
    </main>
</template>

<script setup>
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useCoreStore } from "~/stores/core";
const coreStore = useCoreStore();

useHead({
  title: "Lucian Aionicesei's portfolio",
});

const db = useFirestore();
// const projects = useCollection(collection(db, "projects"));
// console.log(projects);
coreStore.projects = useCollection(collection(db, "projects"));
// coreStore.projects = coreStore.projects.slice().reverse();
// console.log(coreStore.projects);
</script>