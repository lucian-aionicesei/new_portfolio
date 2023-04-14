<template>
  <Transition name="fade">
    <article v-if="showProject" class="fixed top-0 left-0 z-50 h-screen w-screen justify-end pt-12">
          <div @click="toggleProject" class="absolute z-0 w-full h-full top-0 left-0 bg-black opacity-50"></div>
          <div class="inner-content relative w-full h-full z-10 overflow-y-scroll gap-y-10 bg-primary">
            <div class=" sticky top-0 w-full h-20 bg-white flex justify-between md:grid grid-cols-[1fr_0.2fr_1fr] md:gap-x-5">
              <div class="flex justify-between items-center">
                <p class=" font-bold text-lg p-0 pl-6">Asgaard Fest</p>
                <p class="hidden lg:block text-base p-0">Ticket purchasing app</p>
              </div>
              <div class=" col-start-3 h-full items-center justify-end flex gap-x-6 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" class=" h-10 w-auto" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                <svg class=" h-10 w-auto" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="6" width="3" height="3" fill="black"/>
                    <rect x="12" y="6" width="3" height="3" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 4.02944 4.02944 0 9 0H28C32.9706 0 37 4.02944 37 9V27C37 31.9706 32.9706 36 28 36H9C4.02944 36 0 31.9706 0 27V9ZM10 4C6.68629 4 4 6.68629 4 10V11H33V10C33 6.68629 30.3137 4 27 4H10ZM25.4834 17C25.4834 16.1716 24.8118 15.5 23.9834 15.5C23.9176 15.5 23.8528 15.5042 23.7892 15.5125H15.9907C15.1623 15.5125 14.4907 16.184 14.4907 17.0125C14.4907 17.8409 15.1623 18.5125 15.9907 18.5125H20.4246L10.9393 27.9977C10.3536 28.5835 10.3536 29.5332 10.9393 30.119C11.5251 30.7048 12.4749 30.7048 13.0607 30.119L22.4834 20.6963V25C22.4834 25.8284 23.155 26.5 23.9834 26.5C24.8118 26.5 25.4834 25.8284 25.4834 25V17Z" fill="black"/>
                    </svg>
              </div>
            </div>
            <div class=" transition-all w-full h-[50vh] sm:h-[70vh] bg-red-400 lg:pr-[13vw] pt-14 overflow-hidden">
              <img class="ml-auto px-[8vw] lg:px-0 lg:w-[45rem]" src="../assets/images/asgaard_fest 1.png" alt="">
            </div>
            <div class="w-full h-[70vh]"></div>
          </div>
          <div class="fixed z-20 bottom-0 right-0 p-6">
            <div><svg @click="toggleProject" class=" h-10 lg:h-12 w-auto" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="55" height="55" rx="8" fill="black"/>
              <line x1="17.7678" y1="17.2322" x2="39.1567" y2="38.6211" stroke="white" stroke-width="5"/>
              <line x1="17.2322" y1="38.6211" x2="38.6211" y2="17.2323" stroke="white" stroke-width="5"/>
              </svg>
            </div>
          </div>
        </article>
      </Transition>
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

watch(
  () => coreStore.showProject,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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