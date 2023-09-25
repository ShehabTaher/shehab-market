
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC-aAcPfrEp6Y5uvrfaKboHMZ2DD11P80g",
    authDomain: "shehab-market-f060e.firebaseapp.com",
    projectId: "shehab-market-f060e",
    storageBucket: "shehab-market-f060e.appspot.com",
    messagingSenderId: "302860109757",
    appId: "1:302860109757:web:68b9fed906cdaa1b13f4d4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)



export default app