// Import the functions need from the SDKs
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
      };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    console.log(app)
})


