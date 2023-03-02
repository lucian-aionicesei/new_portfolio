<template>
    <div>
        <site-header />
        <slot />
        <footer class="w-full h-96 bg-secondary mt-5 text-primary text-sm">
            <ul class="flex items-center justify-between px-40 h-full">
                <li>Lucian Aionicesei</li>
                <li>+45 5020 4542</li>
                <li>2300 København</li>
                <li>lucian.aionicesei@gmail.com</li>
                <li>
                    <ul class="flex gap-5">
                        <a href="https://www.linkedin.com/in/lucian-aionicesei/" target=”_blank” rel="noreferrer noopener"><Icon class="h-8 w-auto" name="uil:linkedin" /></a>
                        <a href="https://github.com/lucian-aionicesei" target=”_blank” rel="noreferrer noopener"><Icon class="h-8 w-auto" name="uil:github" /></a>
                    </ul>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {};
</script>