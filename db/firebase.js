// Import the functions you need from the SDKs you need
import { initializeApp }  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { v4 } from 'uuid'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPPngdFoPnZbWgLaJPdcubzUe41u68ZQ",
  authDomain: "catedra-2ccc4.firebaseapp.com",
  projectId: "catedra-2ccc4",
  storageBucket: "catedra-2ccc4.appspot.com",
  messagingSenderId: "858454797777",
  appId: "1:858454797777:web:eb84d2d93dabe558c104f0",
  measurementId: "G-BD2MC26DQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Acciones de firebase
export const db = getFirestore(app)
export const storage = getStorage(app)

export async function uploadFile(file){
 const storageRef = ref(storage, v4())
 await uploadBytes(storageRef, file)
 const url = await getDownloadURL(storageRef)
 return url
}
