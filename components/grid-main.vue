<template>
    <section class="grid-main flex flex-col lg:grid grid-cols-[1fr_0.2fr_1fr] gap-5 2xl:container 2xl:mx-auto">
            <article @click='toggleProject()' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-red-400 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg cursor-pointer">AKVA Jewellery</h4>
                        <p class="text-base sm:text-lg">Website ad SoMe strategy</p>
                    </div>
                    <expand-icon class=" hover:scale-125 ease-out transition-all cursor-pointer"></expand-icon>
                </div>
                <img class="hover:scale-105 ease-out transition-all cursor-pointer px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-red-400 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg cursor-pointer">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon class=" hover:scale-125 ease-out transition-all cursor-pointer"></expand-icon>
                </div>
                <img class="hover:scale-105 ease-out transition-all cursor-pointer px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-red-400 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg cursor-pointer">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon class=" hover:scale-125 ease-out transition-all cursor-pointer"></expand-icon>
                </div>
                <img class="hover:scale-105 ease-out transition-all cursor-pointer px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-red-400 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg cursor-pointer">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon class=" hover:scale-125 ease-out transition-all cursor-pointer"></expand-icon>
                </div>
                <img class="hover:scale-105 ease-out transition-all cursor-pointer px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article @click='toggleProject' class=" overflow-hidden aspect-[4/3] md:aspect-[5/3] lg:aspect-auto lg:h-[29vw] w-full bg-red-400 text-primary">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg cursor-pointer">The most recent project</h4>
                        <p class="text-base sm:text-lg">Website portfolio 2.0</p>
                    </div>
                    <expand-icon class=" hover:scale-125 ease-out transition-all cursor-pointer"></expand-icon>
                </div>
                <img class="hover:scale-105 ease-out transition-all cursor-pointer px-6 md:px-28 lg:px-[4vw] ml-auto lg:max-w-[42vw]" src="../assets/images/akva.png" alt="">
            </article>
            <article class="overflow-hidden w-full bg-yellow-300 flex flex-col">
                <div class="pt-5 px-5 sm:py-5 flex justify-between">
                    <div>
                        <h4 class="pb-1 text-base sm:text-lg font-display">Reviews</h4>
                        <!-- <p class="text-base sm:text-lg">Website portfolio 2.0</p> -->
                    </div>
                </div>
                <swiper :loop="true" :modules="[SwiperPagination, SwiperAutoplay]" :pagination="{
                  clickable: true,
                }"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
                class="mySwiper">
                      <swiper-slide class=" px-10">
                            <div class="w-full flex flex-col sm:flex-row items-center gap-x-6 pb-4">
                                <img class=" w-36 h-36 object-cover rounded-full" src="../assets/images/martin-ejstrup.webp" alt="">
                                <div class="w-full sm:w-auto py-5">
                                    <p class="pb-0 font-bold text-lg">Martin Ejstrup</p>
                                    <p class="pb-0">CTO Checkmate ApS</p>
                                </div>
                            </div>
                            <div class="pb-8">
                                <p>Lucian’s positive attitude and eagerness to learn and improve his skills, makes it a true pleasure to work with him. I highly recommend Lucian, and believe he would be a great asset to any organization.</p>
                            </div>
                      </swiper-slide>
                      <swiper-slide class=" px-10">
                            <div class="w-full flex flex-col sm:flex-row items-center gap-x-6 pb-4">
                                <img class=" w-36 h-36 object-cover rounded-full" src="../assets/images/linea.jpeg" alt="">
                                <div class="w-full sm:w-auto py-5">
                                    <p class="pb-0 font-bold text-lg">Linea Pedersen</p>
                                    <p class="pb-0">Software Developer/Lærdal Cph</p>
                                </div>
                            </div>
                            <div class="pb-8">
                                <p>Lucian is an extremely hard-working and positive guy, who is passionate about his work, and always gives 120%. 👉 If I were to hire him again, I would.</p>
                            </div>
                      </swiper-slide>
                      <swiper-slide class=" px-10">
                            <div class="w-full flex flex-col sm:flex-row items-center gap-x-6 pb-4">
                                <img class=" w-36 h-36 object-cover rounded-full" src="../assets/images/Ioannis.jpeg" alt="">
                                <div class="w-full sm:w-auto py-5">
                                    <p class="pb-0 font-bold text-lg">Ioannis Stamatogiannis</p>
                                    <p class="pb-0">Senior Manufacturing Support Associate/Fujifilm Diosynth</p>
                                </div>
                            </div>
                            <div class="pb-8">
                                <p>I have worked with Lucian in the past (while bartending). I can only say positive things for his motivation and work ethics.</p>
                            </div>
                      </swiper-slide>
                </swiper>
            </article>
    </section>
</template>

<script setup>
import { useCoreStore } from "~/stores/core";

const coreStore = useCoreStore();

const showProject = computed(() => {
  return coreStore.getShowProject;
});

const toggleProject = () => {
  coreStore.showProject = !coreStore.showProject;
};
</script>

<style scoped>
.mySwiper {
  @apply h-fit w-full grow;
}

.grid-main > article:nth-child(2),
article:nth-child(3),
article:nth-child(6),
article:nth-child(7),
article:nth-child(10),
article:nth-child(11) {
  @apply col-span-2;
}
</style>