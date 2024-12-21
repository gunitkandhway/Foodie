// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log()

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBl5DZAexslsf3iro0MVNQ4sN7WbgJbFfA',
  authDomain: 'foodie-client-51992.firebaseapp.com',
  projectId: 'foodie-client-51992',
  storageBucket: 'foodie-client-51992.firebasestorage.app',
  messagingSenderId: '76665732962',
  appId: '1:76665732962:web:7faa7067d67477c4d0f63b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;