import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZHdFPnB_kc5hYQNoxdpSQI3KeIgYf1bI",
  authDomain: "pruebagmg-a45d3.firebaseapp.com",
  databaseURL: "https://pruebagmg-a45d3-default-rtdb.firebaseio.com",
  projectId: "pruebagmg-a45d3",
  storageBucket: "pruebagmg-a45d3.firebasestorage.app",
  messagingSenderId: "815394328017",
  appId: "1:815394328017:web:85a01d5b7a0d74f99224f0",
  measurementId: "G-ZEB3Q7LCP9"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
