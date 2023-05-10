<template>
    <main class="px-5 pt-16 lg:pt-8 mt-20 sm:px-10 flex flex-col gap-y-5">
        <hero-main />
        <grid-main :projects="projects"/>
        <call-me />
        <project />
    </main>
</template>

<script setup>
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { useFirestore } from "vuefire";

const db = useFirestore();
const projects = useCollection(collection(db, "projects"));
console.log(projects);
</script>