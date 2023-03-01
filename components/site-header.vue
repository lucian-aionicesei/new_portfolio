<template>
        <header class="theme-grid pl-10 pr-24 h-20 bg-primary">
            <div class="flex justify-between items-end pb-2">
                <nuxt-link class=" font-bold text-lg" to="/">Lucian Aionicesei</nuxt-link>
                <p class="text-base p-0">Frontend developer</p>
            </div>
            <div class="flex justify-between items-end col-start-3">
                <nav class="h-full">
                    <ul class="flex font-bold uppercase text-sm h-full">
                        <li class="pl-3 pr-12 pb-2 flex items-end bg-secondary"><nuxt-link class=" text-white" to="/">Main</nuxt-link></li>
                        <li class="pl-3 pr-12 pb-2 flex items-end"><nuxt-link to="/about">About</nuxt-link></li>
                        <li class="pl-3 pr-12 pb-2 flex items-end"><nuxt-link to="/contact">Contact</nuxt-link></li>
                    </ul>
                </nav>
                <img class="pb-2 w-10" src="../assets/icons/toggle.svg" alt="toggle dark mode">
            </div>
        </header>
</template>

<script>
export default {};
</script>