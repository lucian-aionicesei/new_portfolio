<template>
        <header class="sticky top-0 z-40 h-0">
          <div :class="data.scrollDown && '-translate-y-full'" class=" transition-transform duration-300 delay-100 flex justify-between md:grid grid-cols-[1fr_0.2fr_1fr] md:gap-x-5 px-8 sm:px-10 h-20 dark:bg-secondary dark:text-primary bg-primary">
            <div class="flex justify-between items-end pb-2">
                <nuxt-link class=" font-bold text-xl" to="/">Lucian Aionicesei</nuxt-link>
                <p class="hidden lg:block text-base p-0">Frontend developer</p>
            </div>
            <div class="hidden lg:flex justify-between items-end col-start-3">
                <nav class="h-full">
                    <ul class="header-links flex font-bold uppercase text-sm h-full">
                        <li :class="route.name === 'index' ? 'dark:bg-primary dark:text-black bg-secondary text-white' : 'hover:bg-red-400'" class=" pointer-events-none pl-3 pr-12 pb-2 flex items-end "><nuxt-link class="pointer-events-auto hover:text-white dark:hover:text-secondary" to="/">Main</nuxt-link></li>
                        <li :class="route.name === 'about' ? 'dark:bg-primary dark:text-black bg-secondary text-white' : 'hover:bg-blue-500'" class=" pointer-events-none pl-3 pr-12 pb-2 flex items-end">
                            <nuxt-link class="pointer-events-auto hover:text-white dark:hover:text-secondary" to="/about">About</nuxt-link></li>
                        <li :class="route.name === 'contact' ? 'dark:bg-primary dark:text-black bg-secondary text-white' : 'hover:bg-yellow-400'" class=" pointer-events-none pl-3 pr-12 pb-2 flex items-end"><nuxt-link class="pointer-events-auto hover:text-white dark:hover:text-secondary" to="/contact">Contact</nuxt-link></li>
                    </ul>
                </nav>
                <div @click="toggleDarkMode" :class="darkMode ? 'bg-mid-gray' : 'bg-black'" class="mb-2 px-1 rounded-xl w-11 h-6 flex items-center">
                  <div :class="darkMode ? 'bg-black' : 'translate-x-5 bg-primary'" class=" transition-all h-4 w-4 rounded-full"></div>
                </div>
            </div>
            <div @click="toggleMenu" class="lg:hidden col-start-3 lg:w-full h-full flex items-end justify-end">
                <svg width="48" height="21" class="w-8 sm:w-10 h-auto pb-3" viewBox="0 0 48 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="48" y2="3" class=" stroke-black dark:stroke-primary" stroke-width="6"/>
                    <line y1="18" x2="48" y2="18" class=" stroke-black dark:stroke-primary" stroke-width="6"/>
                </svg>
            </div>
          </div>
          <Transition name="fade">
            <nav v-if="showMenu" class="lg:hidden w-full h-screen dark:bg-secondary dark:text-primary bg-primary pb-20">
              <ul class=" h-full justify-center p-8 sm:p-10 font-display text-6xl flex flex-col gap-y-20">
                <li><nuxt-link @click="toggleMenu" to="/">Main</nuxt-link></li>
                <li><nuxt-link @click="toggleMenu" to="about">About</nuxt-link></li>
                <li><nuxt-link @click="toggleMenu" to="contact">Contact</nuxt-link></li>
              </ul>
            </nav>
          </Transition>
        </header>
</template>

<script setup>
import { useCoreStore } from "~/stores/core";

const coreStore = useCoreStore();

const showMenu = computed(() => {
  return coreStore.getShowMenu;
});

const darkMode = computed(() => {
  return coreStore.getDarkMode;
});

const toggleMenu = () => {
  coreStore.showMenu = !coreStore.showMenu;
};

const toggleDarkMode = () => {
  coreStore.darkMode = !coreStore.darkMode;
};

watch(
  () => coreStore.darkMode,
  (newVal) => {
    if (newVal) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
);

watch(
  () => coreStore.showMenu,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);

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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.5s ease; */
  @apply translate-x-0 transition-all;
}

.fade-enter-from,
.fade-leave-to {
  @apply translate-x-full opacity-0;
}

.fade-enter-active .inner-content,
.fade-leave-active .inner-content {
  @apply transition-all duration-200 ease-out;
}

.fade-enter-from .inner-content,
.fade-leave-to .inner-content {
  @apply translate-y-36 opacity-0;
}
</style>

