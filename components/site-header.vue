<template>
        <header :class="data.scrollDown && '-translate-y-full'" class=" transition-transform duration-300 delay-100 sticky top-0 z-50 flex justify-between md:grid grid-cols-[1fr_0.2fr_1fr] md:gap-x-5 px-8 sm:px-10 lg:pr-24 h-20 bg-primary">
            <div class="flex justify-between items-end pb-2">
                <nuxt-link class=" font-bold text-lg" to="/">Lucian Aionicesei</nuxt-link>
                <p class="hidden lg:block text-base p-0">Frontend developer</p>
            </div>
            <div class="hidden lg:flex justify-between items-end col-start-3">
                <nav class="h-full">
                    <ul class="header-links flex font-bold uppercase text-sm h-full">
                        <li :class="route.name === 'index' ? 'bg-secondary text-white' : 'hover:bg-red-400'" class=" pointer-events-none pl-3 pr-12 pb-2 flex items-end "><nuxt-link class="pointer-events-auto hover:text-white" to="/">Main</nuxt-link></li>
                        <li :class="route.name === 'about' ? 'bg-secondary text-white' : 'hover:bg-blue-500'" class=" pointer-events-none pl-3 pr-12 pb-2 flex items-end">
                            <nuxt-link class="pointer-events-auto hover:text-white" to="/about">About</nuxt-link></li>
                        <li :class="route.name === 'contact' ? 'bg-secondary text-white' : 'hover:bg-yellow-400'" class=" pointer-events-none pl-3 pr-12 pb-2 flex items-end"><nuxt-link class="pointer-events-auto hover:text-white" to="/contact">Contact</nuxt-link></li>
                    </ul>
                </nav>
                <img class="pb-2 w-10" src="../assets/icons/toggle.svg" alt="toggle dark mode">
            </div>
            <div class="lg:hidden col-start-3 lg:w-full h-full flex items-end justify-end">
                <svg width="48" height="21" class="w-8 sm:w-10 h-auto pb-3" viewBox="0 0 48 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="48" y2="3" stroke="black" stroke-width="6"/>
                    <line y1="18" x2="48" y2="18" stroke="black" stroke-width="6"/>
                </svg>
            </div>
        </header>
</template>

<script setup>
const route = useRoute();

watch(
  () => route.name,
  (newRoute) => {
    return newRoute;
  }
);

// Watch scroll direction

const data = reactive({
  scrollValue: 0,
  scrollDown: false,
});

watch(
  () => data.scrollValue,
  (oldValue, newValue) => {
    if (newValue > oldValue) {
      data.scrollDown = false;
    } else {
      data.scrollDown = true;
    }
  }
);

watch(
  () => data.scrollDown,
  (newValue) => {
    return newValue;
  }
);

function getScrollValue() {
  data.scrollValue = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", getScrollValue);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", getScrollValue);
});
</script>

