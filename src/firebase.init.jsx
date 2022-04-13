// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXbU4vgCwrugUghuL_p0MmO5hvQ8SHgsI",
  authDomain: "car-services-41e38.firebaseapp.com",
  projectId: "car-services-41e38",
  storageBucket: "car-services-41e38.appspot.com",
  messagingSenderId: "461360596595",
  appId: "1:461360596595:web:9c534e918b1d1645810c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;