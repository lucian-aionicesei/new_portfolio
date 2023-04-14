<template>
    <article class="flex flex-col lg:grid grid-cols-[1fr_0.2fr_1fr] gap-5 2xl:container 2xl:mx-auto dark:text-primary">
            <section class="lg:aspect-[7/4] h-full w-full col-span-2 dark:bg-dark-gray bg-mid-gray">
                <div class="p-10 justify-between">
                    <h1 class="font-display text-5xl ">Hobbies</h1>
                    <p class="pb-8">Lorem ipsum dolor sit amet aliquam eiusmod nulla fermentum interdum dictum phasellus lajoreet facilisi. Dictum ornare nunc praesent aliquam lacus lobortis dictum risus. Vulputate netus venenatis fringilla dolore duis elit aliqua nulla lobortis purus.</p>
                </div>
            </section>
            <section class="h-full w-full dark:bg-dark-gray bg-mid-gray">
                <div class="p-10 justify-between">
                </div>
            </section>
            <section class="h-full w-full dark:bg-dark-gray bg-mid-gray">
                <div class="p-10 justify-between">
                </div>
            </section>
            <section class="lg:aspect-[7/4] h-full w-full col-span-2 dark:bg-dark-gray bg-mid-gray">
                <div class="p-10 justify-between">
                    <h1 class="font-display text-4xl ">Sports</h1>
                </div>
            </section>
    </article>
</template>

<script>
import expandIcon from "./expand-icon.vue";
export default {
  components: { expandIcon },
};
</script>