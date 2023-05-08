// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// export default defineNuxtPlugin(nuxtApp => {
//     const config = useRuntimeConfig()

//     const firebaseConfig = {
//         apiKey: "AIzaSyAxjD5KR5I7Of1PtbuoUuTUf81g-NpRrmA",
//         authDomain: "porfolio-2023-637f0.firebaseapp.com",
//         projectId: "porfolio-2023-637f0",
//         storageBucket: "porfolio-2023-637f0.appspot.com",
//         messagingSenderId: "215118836037",
//         appId: "1:215118836037:web:c9c5688fb489530908ce2c"
//       };

//     const app = initializeApp(firebaseConfig)

//     const firestore = getFirestore(app)

//     console.log(firestore)

//     nuxtApp.vueApp.provide('firestore', firestore)
//     nuxtApp.provide('firestore', firestore)
// })