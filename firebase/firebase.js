import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDzev-4rwpC84R1U8xzsHtmNiDKjqJNM0M",
  authDomain: "dev-nomad-sassa.firebaseapp.com",
  projectId: "dev-nomad-sassa",
  storageBucket: "dev-nomad-sassa.firebasestorage.app",
  messagingSenderId: "665830556864",
  appId: "1:665830556864:web:955a228ed0574806451925",
  measurementId: "G-E07THJDYTM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);