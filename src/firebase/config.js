import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyD7aFiGj40DHqCvM2oSGhAIgL4FgLTzlEc",

    authDomain: "miniblog-d6e5c.firebaseapp.com",

    projectId: "miniblog-d6e5c",

    storageBucket: "miniblog-d6e5c.appspot.com",

    messagingSenderId: "937124670722",

    appId: "1:937124670722:web:0b06e4d8b521f33e42e61b"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };