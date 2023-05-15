<template>
  <Transition name="fade">
    <article v-if="showProject" class="fixed top-0 left-0 z-50 h-screen w-screen justify-end pt-12 dark:text-primary">
          <div @click="toggleProject" class="absolute z-0 w-full h-full top-0 left-0 bg-black opacity-50"></div>
          <div class="inner-content relative w-full h-full z-10 overflow-y-scroll gap-y-10 dark:bg-secondary bg-primary pb-5">
            <div class=" z-50 sticky top-0 w-full h-20 dark:bg-dark-gray bg-white flex justify-between md:grid grid-cols-[1fr_0.2fr_1fr] md:gap-x-5">
              <div class="flex justify-between items-center">
                <p v-text="data.project.title" class=" font-bold text-lg p-0 pl-6"></p>
                <p v-text="data.project.subheader" class="hidden lg:block text-base p-0"></p>
              </div>
              <div class=" col-start-3 h-full items-center justify-end flex gap-x-6 px-6">
                <a class="w-12" :href="data.project.gitUrl" target=”_blank” rel="noreferrer noopener"><Icon class="h-auto w-full hover:scale-125 ease-out transition-all" name="uil:github" /></a>
                <a :href="data.project.url" target=”_blank” rel="noreferrer noopener"><svg class=" h-10 w-auto hover:scale-125 ease-out transition-all" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="6" width="3" height="3" class="fill-black dark:fill-primary"/>
                    <rect x="12" y="6" width="3" height="3" class="fill-black dark:fill-primary"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 4.02944 4.02944 0 9 0H28C32.9706 0 37 4.02944 37 9V27C37 31.9706 32.9706 36 28 36H9C4.02944 36 0 31.9706 0 27V9ZM10 4C6.68629 4 4 6.68629 4 10V11H33V10C33 6.68629 30.3137 4 27 4H10ZM25.4834 17C25.4834 16.1716 24.8118 15.5 23.9834 15.5C23.9176 15.5 23.8528 15.5042 23.7892 15.5125H15.9907C15.1623 15.5125 14.4907 16.184 14.4907 17.0125C14.4907 17.8409 15.1623 18.5125 15.9907 18.5125H20.4246L10.9393 27.9977C10.3536 28.5835 10.3536 29.5332 10.9393 30.119C11.5251 30.7048 12.4749 30.7048 13.0607 30.119L22.4834 20.6963V25C22.4834 25.8284 23.155 26.5 23.9834 26.5C24.8118 26.5 25.4834 25.8284 25.4834 25V17Z" class="fill-black dark:fill-primary"/>
                    </svg>
                  </a>
                  <svg @click="toggleProject" class=" h-10 w-auto hover:scale-125 ease-out transition-all cursor-pointer" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="55" height="55" rx="8" class="fill-black dark:fill-primary"/>
                    <line x1="17.7678" y1="17.2322" x2="39.1567" y2="38.6211" class="stroke-white dark:stroke-black" stroke-width="5"/>
                    <line x1="17.2322" y1="38.6211" x2="38.6211" y2="17.2323" class="stroke-white dark:stroke-black" stroke-width="5"/>
                  </svg>
              </div>
            </div>
            <div :class="data.themeColor" class=" transition-all w-full h-[50vh] sm:h-[70vh] lg:pr-[13vw] pt-14 overflow-hidden">
              <a :href="data.project.url" target=”_blank” rel="noreferrer noopener"> <img class="ml-auto px-[8vw] lg:px-0 lg:w-[45rem] hover:scale-105 ease-out transition-all" :src="data.project.imgRef" alt=""> </a>
            </div>
            <!-- {{ url }} -->
            <!-- {{ data.project }} -->
            <div class="flex flex-col lg:grid grid-cols-[1fr_0.2fr_1fr] gap-5 px-5 sm:px-10 py-10">
              <div v-if="data.project.about">
                <h2 class=" font-display">About the project</h2>
                <p v-text="data.project.about"></p>
              </div>
              <div class=" col-start-3">
                <h2 class=" font-display">Tools</h2>
                <ul class="flex flex-wrap gap-x-10 gap-y-5">
                  <li v-for="(tool, index) in data.project.tools" :key="index" v-text="tool" class=" font-bold text-lg"></li>
                </ul>
              </div>
              <div v-if="data.project.focus">
                <h2 class=" font-display">Project focus</h2>
                <p v-text="data.project.focus"></p>
              </div>
              <div v-if="data.project.insights" class="col-start-3">
                <h2 class=" font-display">Insights</h2>
                <p v-text="data.project.insights"></p>
              </div>
            </div>
          </div>
          <div class="fixed z-20 bottom-0 right-0 pr-6 pb-6">
            <div>
              <!-- <svg @click="toggleProject" class=" h-10 lg:h-12 w-auto hover:scale-110 ease-out transition-all cursor-pointer" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="55" height="55" rx="8" class="fill-black dark:fill-primary"/>
              <line x1="17.7678" y1="17.2322" x2="39.1567" y2="38.6211" class="stroke-white dark:stroke-black" stroke-width="5"/>
              <line x1="17.2322" y1="38.6211" x2="38.6211" y2="17.2323" class="stroke-white dark:stroke-black" stroke-width="5"/>
              </svg> -->
              <svg @click="bringNext" class="h-12 w-auto hover:scale-110 ease-out transition-all cursor-pointer" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="55" height="55" rx="27.5" class=" fill-black dark:fill-white"/>
                <rect x="24.1377" y="12" width="21.4081" height="3.96445" transform="rotate(45 24.1377 12)" class=" fill-white dark:fill-black"/>
                <rect x="21.3345" y="39.4722" width="21.4081" height="3.96445" transform="rotate(-45 21.3345 39.4722)" class=" fill-white dark:fill-black"/>
              </svg>

            </div>
          </div>
          <div class="fixed z-20 bottom-0 left-0 pl-6 pb-6">
            <div>
              <!-- <svg @click="toggleProject" class=" h-10 lg:h-12 w-auto hover:scale-110 ease-out transition-all cursor-pointer" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="55" height="55" rx="8" class="fill-black dark:fill-primary"/>
              <line x1="17.7678" y1="17.2322" x2="39.1567" y2="38.6211" class="stroke-white dark:stroke-black" stroke-width="5"/>
              <line x1="17.2322" y1="38.6211" x2="38.6211" y2="17.2323" class="stroke-white dark:stroke-black" stroke-width="5"/>
              </svg> -->
              <svg @click="bringPrevious" class="h-12 w-auto hover:scale-110 ease-out transition-all cursor-pointer" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="55" y="55" width="55" height="55" rx="27.5" transform="rotate(-180 55 55)" class=" fill-black dark:fill-white"/>
                <rect x="30.8623" y="43" width="21.4081" height="3.96445" transform="rotate(-135 30.8623 43)" class=" fill-white dark:fill-black"/>
                <rect x="33.6655" y="15.5278" width="21.4081" height="3.96445" transform="rotate(135 33.6655 15.5278)" class=" fill-white dark:fill-black"/>
              </svg>
            </div>
          </div>
        </article>
      </Transition>
</template>

<script setup>
import { useCoreStore } from "~/stores/core";
import { useCollection } from "vuefire";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref as storageRef } from "firebase/storage";
import {
  useFirestore,
  useFirebaseStorage,
  useStorageFile,
  useStorageFileUrl,
} from "vuefire";
// import { useFirebaseStorage, useStorageFile } from 'vuefire'

const coreStore = useCoreStore();

const db = useFirestore();
const data = reactive({
  project: coreStore.currentProject,
  themeColor: coreStore.themeColor,
});
// const storage = useFirebaseStorage();
// const imagesRef = storageRef(storage, "images");
// const spaceRef = useStorageFile(imagesRef, "venetian.jpeg");

// console.log(spaceRef);

// *************

// const storage = useFirebaseStorage();
// const venetian = storageRef(storage, "images/venetian.jpeg");
// const {
//   url,
//   // refresh the url if the file changes
//   refresh,
// } = useStorageFileUrl(venetian);

// console.log(url);

// ******* Getting an entire collection

// const projects = useCollection(collection(db, "projects"));

// ******* Getting a single file

async function getProject(projectTitle) {
  const q = query(
    collection(db, "projects"),
    where("title", "==", projectTitle)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    coreStore.currentProject = (doc.id, " => ", doc.data());
  });
}

// ************

// import { collection, getDocs } from "firebase/firestore";

// const nuxtApp = useNuxtApp();
// const db = nuxtApp.$firestore;

// console.log(db);

// const querySnapshot = await getDocs(collection(db, "projects"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// const querySnapshot = await getDocs(collection(db, "projects"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const showProject = computed(() => {
  return coreStore.getShowProject;
});

const toggleProject = () => {
  coreStore.showProject = !coreStore.showProject;
};

const bringNext = () => {
  console.log("bring next project");
};

const bringPrevious = () => {
  console.log("bring previous project");
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

watch(
  () => coreStore.projectTitle,
  (newVal) => {
    if (newVal) {
      console.log(newVal);
      getProject(newVal);
      console.log(data.project);
    }
  }
);

watch(
  () => coreStore.currentProject,
  (newVal) => {
    if (newVal) {
      data.project = newVal;
    }
  }
);

watch(
  () => coreStore.themeColor,
  (newVal) => {
    if (newVal) {
      data.themeColor = newVal;
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