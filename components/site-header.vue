<template>
        <header class="flex justify-between md:grid grid-cols-[1fr_0.2fr_1fr] md:gap-x-5 px-8 sm:px-10 lg:pr-24 h-20 bg-primary">
            <div class="flex justify-between items-end pb-2">
                <nuxt-link class=" font-bold text-lg" to="/">Lucian Aionicesei</nuxt-link>
                <p class="hidden lg:block text-base p-0">Frontend developer</p>
            </div>
            <div class="hidden lg:flex justify-between items-end col-start-3">
                <nav class="h-full">
                    <ul class="header-links flex font-bold uppercase text-sm h-full">
                        <li class="pl-3 pr-12 pb-2 flex items-end bg-secondary text-white"><nuxt-link to="/">Main</nuxt-link></li>
                        <li class="pl-3 pr-12 pb-2 flex items-end hover:bg-yellow-400 hover:text-white"><nuxt-link to="/about">About</nuxt-link></li>
                        <li class="pl-3 pr-12 pb-2 flex items-end hover:bg-green-800 hover:text-white"><nuxt-link to="/contact">Contact</nuxt-link></li>
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

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-links {
}
</style>