<template>
    <article class="flex flex-col gap-y-14 lg:grid grid-cols-[1fr_0.2fr_1fr] gap-x-5 pb-12 2xl:container mx-auto dark:text-primary">
        <img class="w-full aspect-square object-cover max-w-sm lg:max-w-none mx-auto" src="../assets/images/lucian.jpg" alt="Lucian">
        <section class="flex flex-col col-start-3 justify-center max-w-lg lg:max-w-none mx-auto">
            <h1 class="text-xl sm:text-3xl font-display">Frontend Developer with flair for UI/UX</h1>
            <p>Welcome to my portfolio! I'm a Frontend Developer specialized in creating intuitive web experiences for users, utilizing my skills in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and JS frameworks such as <b>React</b> and <b>Vue</b>. With a passion for design and development, I strive to deliver seamless, responsive, and visually appealing websites. Browse through my portfolio to see some of my projects, and feel free to contact me for any inquiries or collaboration opportunities.</p>
            <div class="flex gap-x-6">
                <nuxt-link class="text-base font-bold dark:bg-primary bg-secondary dark:text-black text-white px-10 h-12 my-1 rounded-md flex items-center" to="/about">About</nuxt-link>
                <a class="w-12" href="https://www.linkedin.com/in/lucian-aionicesei/" target=”_blank” rel="noreferrer noopener"><Icon class="h-full w-auto" name="uil:linkedin" /></a>
                <a class="w-12" href="https://github.com/lucian-aionicesei" target=”_blank” rel="noreferrer noopener"><Icon class="h-full w-auto" name="uil:github" /></a>
            </div>
        </section>
    </article>
</template>

<script>
export default {};
</script>