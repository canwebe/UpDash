import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSANGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)

// Provider
export const GoogleProvider = new GoogleAuthProvider()
export const GithubProvider = new GithubAuthProvider()
