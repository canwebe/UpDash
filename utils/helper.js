import { db } from '@/lib/firebase'
import { doc, getDoc, writeBatch } from 'firebase/firestore'
import { batch } from 'react-redux'

// Check Username Exist
export const checkUsername = async (username) => {
  const docRef = doc(db, 'usernames', username)

  const docSnap = await getDoc(docRef)

  return docSnap.exists()
}

// Create User Data
export const createUserData = async (user, username) => {
  // Refs
  const userRef = doc(db, 'users', user?.uid)
  const usernameRef = doc(db, 'usernames', username)

  const userData = {
    username,
    uid: user?.uid,
    photoURL: user?.photoURL,
    displayName: user?.displayName,
  }

  console.log('user Data', userRef, usernameRef)
  const batch = writeBatch(db)
  // Batch Writing

  // Setting User Data
  batch.set(userRef, userData)

  // // Setting Username
  batch.set(usernameRef, { uid: user?.uid })

  // Comitting Changes
  await batch.commit()
}
